import React, {useState} from 'react';
import Components from '..';
import styles from './styles';
import useDispatch from '../../hooks/useDispatch';
import Actions from '../../redux/actions';
import TimeUtil from '../../utils/TimeUtil';

export type Props = {};

const HeaderLogoutButton = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const onPress = async () => {
    setIsLoading(true);
    await TimeUtil.delay(500);
    await dispatch(Actions.User.Thunk.logoutRequest());
    setIsLoading(false);
  };

  return (
    <Components.Button.Text
      style={styles.headerRight}
      title="Logout"
      TextComponent={Components.Text.TextOnSecondary}
      isLoading={isLoading}
      onPress={onPress}
    />
  );
};

export default HeaderLogoutButton;
