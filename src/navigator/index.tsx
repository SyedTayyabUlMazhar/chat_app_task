import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import {ParamList} from './types';

const Stack = createStackNavigator<ParamList>();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Test"
        component={() => (
          <View style={{width: 100, height: 100, backgroundColor: 'pink'}} />
        )}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
