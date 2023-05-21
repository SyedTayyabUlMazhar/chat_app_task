import React, {useCallback, useMemo} from 'react';
import {View} from 'react-native';

import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import useTheme from '../hooks/useTheme';
import {BottomTabParamList} from './types';
import Routes from './routes';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const People = () => {
  return <View />;
};
const Chat = () => {
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
        name={Routes.Chat}
        component={Chat}
        options={{
          tabBarIcon: chatTabIcon,
        }}
      />
      <Tab.Screen
        name={Routes.People}
        component={People}
        options={{
          tabBarIcon: homeTabIcon,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
