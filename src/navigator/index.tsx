import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Screens from '../screens';
import {ParamList} from './types';

const Stack = createStackNavigator<ParamList>();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignUp"
        options={{title: 'Sign Up'}}
        component={Screens.SignUp}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
