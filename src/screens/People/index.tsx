import {NavigationProp} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  RefreshControl,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Components from '../../components';
import useSelector from '../../hooks/useSelector';
import useTheme from '../../hooks/useTheme';
import useThunkAction from '../../hooks/useThunkAction';
import Routes from '../../navigator/routes';
import {AppStackParamList} from '../../navigator/types';
import Actions from '../../redux/actions';
import {BottomTabScreenProps, User} from '../../types';
import ListEmptyComponent from './ListEmptyComponent';
import styles from './styles';

const PROFILE_PIC =
  'https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg';

const People = (props: BottomTabScreenProps<typeof Routes.People>) => {
  const {navigation} = props;

  const theme = useTheme();

  const users = useSelector(state => state.user.users);
  const getAllUsersAction = useThunkAction(Actions.User.Thunk.getAllUsers);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const ownChatRooms = useSelector(state => state.user.user?.chatRooms ?? []);

  useEffect(() => {
    getAllUsersAction.dispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRefresh = async () => {
    setIsRefreshing(true);
    await getAllUsersAction.dispatch();
    setIsRefreshing(false);
  };

  const onMessageIconPress = (user: User) => {
    const appNavigator =
      navigation.getParent<NavigationProp<AppStackParamList>>();

    const chatRoomWithOtherUser = ownChatRooms.find(
      ({otherUserId}) => otherUserId === user.uid,
    );

    appNavigator.navigate(Routes.Chat, {
      otherUser: user,
      chatRoomId: chatRoomWithOtherUser?.roomId,
    });
  };

  const renderItem: ListRenderItem<User> = ({item}) => (
    <View style={styles.itemContainer}>
      <Image
        source={{
          uri: PROFILE_PIC,
        }}
        style={styles.itemImage}
      />
      <Components.Text.TextOnSecondary>
        {item.name}
      </Components.Text.TextOnSecondary>
      <TouchableOpacity
        style={styles.messageIcon}
        onPress={() => onMessageIconPress(item)}>
        <MaterialIcons name="message" color={theme.secondaryText} size={28} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        renderItem={renderItem}
        data={users}
        ListEmptyComponent={ListEmptyComponent}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            colors={[theme.primary]}
            tintColor={theme.primary}
          />
        }
      />
    </View>
  );
};

export default People;
