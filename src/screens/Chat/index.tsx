import firestore from '@react-native-firebase/firestore';
import React, {useCallback, useState} from 'react';
import {IMessage} from 'react-native-gifted-chat';
import uuid from 'react-native-uuid';
import Collections from '../../collections';
import Components from '../../components';
import useSelector from '../../hooks/useSelector';
import Routes from '../../navigator/routes';
import {AppStackScreenProps, ChatRoom, UserChatRoom} from '../../types';
import ChatUtil from '../../utils/ChatUtil';

export function Chat(props: AppStackScreenProps<typeof Routes.Chat>) {
  const {
    route: {
      params: {otherUser},
    },
  } = props;

  const currentUser = useSelector(state => state.user.user)!;

  const [messages] = useState<IMessage[]>([]);
  // {"_id": "f05e0208-11b1-48b0-82b4-2243214438a7", "createdAt": 2023-05-21T18:42:37.747Z, "text": "S", "user": {"_id": 1}}
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
      const room = createChatRoom(newMessages[0]);
      await Collections.ChatRooms.doc(room.uid).set(room);

      const chatRoomForSenderUser: UserChatRoom = {
        roomId: room.uid,
        otherUserId: otherUser.uid,
      };
      const senderUserUpdate = Collections.Users.doc(currentUser.uid).update({
        chatRooms: firestore.FieldValue.arrayUnion(chatRoomForSenderUser),
      });

      const chatRoomForReceiverUser: UserChatRoom = {
        roomId: room.uid,
        otherUserId: currentUser.uid,
      };
      const receiverUserUpdate = Collections.Users.doc(otherUser.uid).update({
        chatRooms: firestore.FieldValue.arrayUnion(chatRoomForReceiverUser),
      });

      await Promise.all([senderUserUpdate, receiverUserUpdate]);
    },
    [createChatRoom, currentUser.uid, otherUser.uid],
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
