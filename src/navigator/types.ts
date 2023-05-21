import {User} from '../types';
import Routes from './routes';

export type AuthStackParamList = {
  [Routes.SignUp]: undefined;
  [Routes.LogIn]: undefined;
};

export type AppStackParamList = {
  [Routes.BottomTabNavigator]: undefined;
  [Routes.Chat]: {otherUser: User; chatRoomId?: string};
};

export type BottomTabParamList = {
  [Routes.People]: undefined;
  [Routes.Conversations]: undefined;
};
