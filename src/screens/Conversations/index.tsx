import React, {useEffect, useState} from 'react';
import {FlatList, Image, ListRenderItem, View} from 'react-native';
import Components from '../../components';
import ListEmptyComponent from './ListEmptyComponent';
import styles from './styles';
import {Conversation} from '../../types';
import Collections from '../../collections';
import useSelector from '../../hooks/useSelector';
const PROFILE_PIC =
  'https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg';

const Conversations = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  const currentUserId = useSelector(state => state.user.user?.uid);

  useEffect(() => {
    if (!currentUserId) {
      return;
    }
    Collections.Users.doc(currentUserId).onSnapshot(async snapshot => {
      const chatRooms = snapshot.data()?.chatRooms ?? [];
      console.log('ChatRooms:', chatRooms);
      const latestConvosPromises = chatRooms.map(async chatRoom => {
        const roomId = chatRoom.roomId;

        const otherUser = (
          await Collections.Users.doc(chatRoom.otherUserId).get()
        ).data()!;

        const lastMessage =
          (await Collections.ChatRooms.doc(roomId).get()).data()?.lastMessage
            ?.content ?? '';

        const convo: Conversation = {
          roomId,
          otherUser: otherUser,
          lastMessage,
        };
        return convo;
      });

      const latestConvos = await Promise.all(latestConvosPromises);

      setConversations(latestConvos);
    });
  }, [currentUserId]);

  const renderItem: ListRenderItem<Conversation> = ({item}) => (
    <View style={styles.itemContainer}>
      <Image
        source={{
          uri: PROFILE_PIC,
        }}
        style={styles.itemImage}
      />
      <View>
        <Components.Text.TextOnSecondary style={styles.name}>
          {item.otherUser.name}
        </Components.Text.TextOnSecondary>
        <Components.Text.TextOnSecondary>
          {item.lastMessage}
        </Components.Text.TextOnSecondary>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        renderItem={renderItem}
        data={conversations}
        ListEmptyComponent={ListEmptyComponent}
      />
    </View>
  );
};

export default Conversations;
