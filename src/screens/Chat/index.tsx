import firestore from '@react-native-firebase/firestore';
import React, {useCallback, useEffect, useState} from 'react';
import {IMessage} from 'react-native-gifted-chat';
import uuid from 'react-native-uuid';
import Collections from '../../collections';
import Components from '../../components';
import useDispatch from '../../hooks/useDispatch';
import useSelector from '../../hooks/useSelector';
import Routes from '../../navigator/routes';
import Actions from '../../redux/actions';
import {
  AppStackScreenProps,
  ChatMessage,
  ChatRoom,
  UserChatRoom,
} from '../../types';
import ChatUtil from '../../utils/ChatUtil';

export function Chat(props: AppStackScreenProps<typeof Routes.Chat>) {
  const {
    navigation,
    route: {
      params: {otherUser, chatRoomId},
    },
  } = props;

  const dispatch = useDispatch();

  const currentUser = useSelector(state => state.user.user)!;

  const [messages, setMessages] = useState<IMessage[]>([]);
  // {"_id": "f05e0208-11b1-48b0-82b4-2243214438a7", "createdAt": 2023-05-21T18:42:37.747Z, "text": "S", "user": {"_id": 1}}

  useEffect(() => {
    const unsubscribe = Collections.ChatRooms.doc(chatRoomId).onSnapshot(
      snapshot => {
        const latestMessages = snapshot.data()?.messages ?? [];
        const iMessages: IMessage[] = [];

        for (let i = latestMessages.length - 1; i >= 0; i--) {
          iMessages.push(
            ChatUtil.iMessageFromChatMessage(latestMessages[i], [
              currentUser,
              otherUser,
            ]),
          );
        }
        setMessages(iMessages);
      },
    );
    return unsubscribe;
  }, [chatRoomId, currentUser, otherUser]);

  const createChatRoom = useCallback(
    (iMessage: IMessage) => {
      const message = ChatUtil.chatMessageFromIMessage(iMessage, otherUser.uid);
      const room: ChatRoom = {
        uid: uuid.v4() as string,
        participants: [otherUser.uid, currentUser.uid],
        messages: [message],
        lastMessage: message,
      };
      return room;
    },
    [currentUser.uid, otherUser.uid],
  );

  const onSend = useCallback(
    async (newMessages: IMessage[] = []) => {
      console.log('Messages:', newMessages);
      if (!chatRoomId) {
        console.log('onSend: ChatRoom doesnt exist will creat new ');
        const room = createChatRoom(newMessages[0]);
        await Collections.ChatRooms.doc(room.uid).set(room);

        const chatRoomToAddToCurrentUser: UserChatRoom = {
          roomId: room.uid,
          otherUserId: otherUser.uid,
        };
        const senderUserUpdate = Collections.Users.doc(currentUser.uid).update({
          chatRooms: firestore.FieldValue.arrayUnion(
            chatRoomToAddToCurrentUser,
          ),
        });

        const chatRoomToAddToOtherUser: UserChatRoom = {
          roomId: room.uid,
          otherUserId: currentUser.uid,
        };
        const receiverUserUpdate = Collections.Users.doc(otherUser.uid).update({
          chatRooms: firestore.FieldValue.arrayUnion(chatRoomToAddToOtherUser),
        });

        await Promise.all([senderUserUpdate, receiverUserUpdate]);

        dispatch(
          Actions.User.Reducer.addOwnChatRoom({
            room: chatRoomToAddToCurrentUser,
          }),
        );
        dispatch(
          Actions.User.Reducer.addChatRoomToUser({
            room: chatRoomToAddToCurrentUser,
            userId: otherUser.uid,
          }),
        );

        navigation.setParams({chatRoomId: room.uid});
      } else {
        console.log('onSend: ChatRoom exists');
        const message: ChatMessage = ChatUtil.chatMessageFromIMessage(
          newMessages[0],
          otherUser.uid,
        );

        await Collections.ChatRooms.doc(chatRoomId).update({
          messages: firestore.FieldValue.arrayUnion(message),
          lastMessage: message,
        });
        console.log('onSend: message added to existing chatRoom: ', chatRoomId);
      }
    },
    [
      chatRoomId,
      createChatRoom,
      currentUser.uid,
      dispatch,
      navigation,
      otherUser.uid,
    ],
  );

  return (
    <Components.ThemedGiftedChat
      messages={messages}
      onSend={onSend}
      user={{
        _id: currentUser.uid,
      }}
    />
  );
}
export default Chat;
