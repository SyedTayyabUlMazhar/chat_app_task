import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Screens from '../screens';
import {AppStackParamList, AuthStackParamList} from './types';
import useTheme from '../hooks/useTheme';
import Routes from './routes';
import useSelector from '../hooks/useSelector';

const AuthStack = createStackNavigator<AuthStackParamList>();
const AppStack = createStackNavigator<AppStackParamList>();

const Navigator = () => {
  const theme = useTheme();
  const user = useSelector(state => state.user.user);
  const isLoggedIn = Boolean(user);

  return isLoggedIn ? (
    <AppStack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: theme.background},
        headerStyle: {
          backgroundColor: theme.background,
          shadowColor: 'transparent',
        },
        headerTintColor: theme.secondaryText,
      }}>
      <AppStack.Screen name="Home" component={Screens.Home} />
    </AppStack.Navigator>
  ) : (
    <AuthStack.Navigator
      initialRouteName={Routes.LogIn}
      screenOptions={{
        cardStyle: {backgroundColor: theme.background},
        headerStyle: {
          backgroundColor: theme.background,
          shadowColor: 'transparent',
        },
        headerTintColor: theme.secondaryText,
      }}>
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
