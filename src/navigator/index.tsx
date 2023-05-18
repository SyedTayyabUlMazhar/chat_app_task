import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Screens from '../screens';
import {AuthStackParamList} from './types';
import useTheme from '../hooks/useTheme';
import Routes from './routes';

const AuthStack = createStackNavigator<AuthStackParamList>();

const Navigator = () => {
  const theme = useTheme();
  return (
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
