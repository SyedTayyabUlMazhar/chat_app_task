import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Screens from '../screens';
import {ParamList} from './types';
import useTheme from '../hooks/useTheme';

const Stack = createStackNavigator<ParamList>();

const Navigator = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="LogIn"
      screenOptions={{
        cardStyle: {backgroundColor: theme.background},
        headerStyle: {
          backgroundColor: theme.background,
          shadowColor: 'transparent',
        },
        headerTintColor: theme.secondaryText,
      }}>
      <Stack.Screen
        name="SignUp"
        options={{title: 'Sign Up'}}
        component={Screens.SignUp}
      />
      <Stack.Screen
        name="LogIn"
        options={{title: 'Login'}}
        component={Screens.LogIn}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
