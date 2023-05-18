import {StackScreenProps as RNStackScreenProps} from '@react-navigation/stack';
import {ParamList} from './navigator/types';

export type User = {
  uid: string;
  name: string;
  email: string;
};

export type StackScreenProps<K extends keyof ParamList> = RNStackScreenProps<
  ParamList,
  K
>;
