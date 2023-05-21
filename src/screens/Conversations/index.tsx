import {NavigationProp} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  TouchableOpacity,
  View,
} from 'react-native';
import Collections from '../../collections';
import Components from '../../components';
import useDispatch from '../../hooks/useDispatch';
import useSelector from '../../hooks/useSelector';
import Routes from '../../navigator/routes';
import {AppStackParamList} from '../../navigator/types';
import Actions from '../../redux/actions';
import {BottomTabScreenProps, Conversation} from '../../types';
import ListEmptyComponent from './ListEmptyComponent';
import styles from './styles';
const PROFILE_PIC =
  'https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg';

const Conversations = (
  props: BottomTabScreenProps<typeof Routes.Conversations>,
) => {
  const {navigation} = props;
  const dispatch = useDispatch();

  const conversations = useSelector(state => state.user.conversations ?? []);

  const currentUserId = useSelector(state => state.user.user?.uid);

  useEffect(() => {
    if (!currentUserId) {
      return;
    }
    Collections.Users.doc(currentUserId).onSnapshot(async snapshot => {
      const chatRooms = snapshot.data()?.chatRooms ?? [];
      console.log('ChatRooms:', chatRooms);
      dispatch(
        Actions.User.Reducer.fetchOwnChatRoomsSuccess({rooms: chatRooms}),
      );
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

      dispatch(
        Actions.User.Reducer.fetchOwnConversationsSuccess({
          conversations: latestConvos,
        }),
      );
    });
  }, [currentUserId, dispatch]);

  const onConversationItemPress = (item: Conversation) => {
    const appNavigator =
      navigation.getParent<NavigationProp<AppStackParamList>>();

    appNavigator.navigate(Routes.Chat, {
      chatRoomId: item.roomId,
      otherUser: item.otherUser,
    });
  };
  const renderItem: ListRenderItem<Conversation> = ({item}) => (
    <TouchableOpacity
      onPress={() => onConversationItemPress(item)}
      style={styles.itemContainer}>
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
    </TouchableOpacity>
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
