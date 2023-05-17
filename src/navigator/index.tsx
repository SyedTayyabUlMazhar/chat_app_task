import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Screens from '../screens';
import {ParamList} from './types';
import useTheme from '../hooks/useTheme';
import Routes from './routes';

const Stack = createStackNavigator<ParamList>();

const Navigator = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator
      initialRouteName={Routes.LogIn}
      screenOptions={{
        cardStyle: {backgroundColor: theme.background},
        headerStyle: {
          backgroundColor: theme.background,
          shadowColor: 'transparent',
        },
        headerTintColor: theme.secondaryText,
      }}>
      <Stack.Screen
        name={Routes.SignUp}
        options={{title: 'Signup'}}
        component={Screens.SignUp}
      />
      <Stack.Screen
        name={Routes.LogIn}
        options={{title: 'Login'}}
        component={Screens.LogIn}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
