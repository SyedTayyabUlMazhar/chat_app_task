import React, {useEffect} from 'react';
import {View} from 'react-native';
import useSelector from '../../hooks/useSelector';
import useThunkAction from '../../hooks/useThunkAction';
import Actions from '../../redux/actions';

const People = () => {
  const users = useSelector(state => state.user.users);
  const getAllUsersAction = useThunkAction(Actions.User.Thunk.getAllUsers);

  useEffect(() => {
    getAllUsersAction.dispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('Loading:', getAllUsersAction.isLoading);
  }, [getAllUsersAction.isLoading]);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return <View />;
};

export default People;
