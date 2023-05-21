import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import React, {useCallback, useMemo} from 'react';
import Components from '../components';
import useSelector from '../hooks/useSelector';
import useTheme from '../hooks/useTheme';
import Screens from '../screens';
import Routes from './routes';
import {AppStackParamList, AuthStackParamList} from './types';
import BottomTabNavigator from './BottomTabNavigator';

const AuthStack = createStackNavigator<AuthStackParamList>();
const AppStack = createStackNavigator<AppStackParamList>();

const Navigator = () => {
  const theme = useTheme();
  const user = useSelector(state => state.user.user);
  const isLoggedIn = Boolean(user);

  const screenOptions: StackNavigationOptions = useMemo(
    () => ({
      cardStyle: {backgroundColor: theme.background},
      headerStyle: {
        backgroundColor: theme.background,
        shadowColor: 'transparent',
      },
      headerTintColor: theme.secondaryText,
    }),
    [theme.background, theme.secondaryText],
  );

  const headerRight = useCallback(() => <Components.HeaderLogoutButton />, []);

  return isLoggedIn ? (
    <AppStack.Navigator screenOptions={screenOptions}>
      <AppStack.Screen
        name={Routes.BottomTabNavigator}
        component={BottomTabNavigator}
        options={{
          headerRight: headerRight,
          title: '',
        }}
      />
      <AppStack.Screen name={Routes.Chat} component={Screens.Chat} />
    </AppStack.Navigator>
  ) : (
    <AuthStack.Navigator
      initialRouteName={Routes.LogIn}
      screenOptions={screenOptions}>
      <AuthStack.Screen
        name={Routes.SignUp}
        options={{title: 'Signup'}}
        component={Screens.SignUp}
      />
      <AuthStack.Screen
        name={Routes.LogIn}
        options={{title: 'Login'}}
        component={Screens.LogIn}
      />
    </AuthStack.Navigator>
  );
};

export default Navigator;
