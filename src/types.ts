import {StackScreenProps as RNStackScreenProps} from '@react-navigation/stack';
import {AuthStackParamList} from './navigator/types';

export type User = {
  uid: string;
  name: string;
  email: string;
};

export type AuthStackScreenProps<K extends keyof AuthStackParamList> =
  RNStackScreenProps<AuthStackParamList, K>;
