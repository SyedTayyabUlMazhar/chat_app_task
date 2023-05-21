import {ChatRoom, User} from '../types';
import Routes from './routes';

export type AuthStackParamList = {
  [Routes.SignUp]: undefined;
  [Routes.LogIn]: undefined;
};

export type AppStackParamList = {
  [Routes.BottomTabNavigator]: undefined;
  [Routes.Chat]: {otherUser: User; chatRoom?: ChatRoom};
};

export type BottomTabParamList = {
  [Routes.People]: undefined;
  [Routes.Conversations]: undefined;
};
