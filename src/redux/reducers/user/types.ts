import {Conversation, User, UserChatRoom} from '../../../types';

export type UserReducerType = {
  user?: User;
  users: User[];
  myRooms: UserChatRoom[];
  conversations: Conversation[];
};
