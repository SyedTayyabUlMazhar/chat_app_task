import React from 'react';
import Components from '..';
import useThunkAction from '../../hooks/useThunkAction';
import Actions from '../../redux/actions';
import styles from './styles';

export type Props = {};

const HeaderLogoutButton = () => {
  const logoutAction = useThunkAction<void>(Actions.User.Thunk.logoutRequest);

  const onPress = async () => {
    logoutAction.dispatch();
  };

  return (
    <Components.Button.Text
      style={styles.headerRight}
      title="Logout"
      TextComponent={Components.Text.TextOnSecondary}
      isLoading={logoutAction.isLoading}
      onPress={onPress}
    />
  );
};

export default HeaderLogoutButton;
