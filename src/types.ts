import {StackScreenProps as RNStackScreenProps} from '@react-navigation/stack';
import {
  AppStackParamList,
  AuthStackParamList,
  BottomTabParamList,
} from './navigator/types';
import {BottomTabScreenProps as RNBottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type User = {
  uid: string;
  name: string;
  email: string;
};

export type AuthStackScreenProps<K extends keyof AuthStackParamList> =
  RNStackScreenProps<AuthStackParamList, K>;

export type AppStackScreenProps<K extends keyof AppStackParamList> =
  RNStackScreenProps<AppStackParamList, K>;

export type BottomTabScreenProps<K extends keyof BottomTabParamList> =
  RNBottomTabScreenProps<BottomTabParamList, K>;
