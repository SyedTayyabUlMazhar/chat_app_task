import React, {useCallback, useMemo} from 'react';
import {View} from 'react-native';

import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useTheme from '../hooks/useTheme';
import Screens from '../screens';
import Routes from './routes';
import {BottomTabParamList} from './types';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const Conversations = () => {
  return <View />;
};

function BottomTabNavigator() {
  const theme = useTheme();
  const tabIcon: (
    name: string,
    Icon?: typeof MaterialCommunityIcons | typeof FontAwesome5,
  ) => BottomTabNavigationOptions['tabBarIcon'] = useCallback(
    (name: string, Icon = MaterialCommunityIcons) =>
      // eslint-disable-next-line react/no-unstable-nested-components
      ({color, size}) => {
        return <Icon name={name} color={color} size={size} />;
      },
    [],
  );

  const homeTabIcon = useMemo(() => tabIcon('users', FontAwesome5), [tabIcon]);
  const chatTabIcon = useMemo(() => tabIcon('chat'), [tabIcon]);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: theme.primary,
        tabBarLabelStyle: {fontSize: 13},
      }}
      sceneContainerStyle={{
        backgroundColor: theme.background,
      }}>
      <Tab.Screen
        name={Routes.Conversations}
        component={Conversations}
        options={{
          tabBarIcon: chatTabIcon,
        }}
      />
      <Tab.Screen
        name={Routes.People}
        component={Screens.People}
        options={{
          tabBarIcon: homeTabIcon,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
