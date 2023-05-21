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
import Actions from '../../redux/actions';
import {User} from '../../types';
import ListEmptyComponent from './ListEmptyComponent';
import styles from './styles';

const PROFILE_PIC =
  'https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg';

const People = () => {
  const theme = useTheme();

  const users = useSelector(state => state.user.users);
  const getAllUsersAction = useThunkAction(Actions.User.Thunk.getAllUsers);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    getAllUsersAction.dispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRefresh = async () => {
    setIsRefreshing(true);
    await getAllUsersAction.dispatch();
    setIsRefreshing(false);
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
      <TouchableOpacity style={styles.messageIcon}>
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
