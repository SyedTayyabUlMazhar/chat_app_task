import {Conversation, UserChatRoom} from '../../../types';
import {createActionCreator} from '../../ActionCreator';
import {GetAllUsersSuccessPayload, SignUpSuccessPayload} from './types';

const signInSuccess =
  createActionCreator<SignUpSuccessPayload>('SIGN_IN_SUCCESS');
const signUpSuccess =
  createActionCreator<SignUpSuccessPayload>('SIGN_UP_SUCCESS');

const logout = createActionCreator('LOGOUT');

const getAllUsersSuccess = createActionCreator<GetAllUsersSuccessPayload>(
  'GET_ALL_USERS_SUCCESS',
);

const addOwnChatRoom = createActionCreator<{room: UserChatRoom}>(
  'ADD_OWN_CHAT_ROOM',
);
const addChatRoomToUser = createActionCreator<{
  userId: string;
  room: UserChatRoom;
}>('ADD_CHAT_ROOM_TO_USER');

const fetchOwnChatRoomsSuccess = createActionCreator<{rooms: UserChatRoom[]}>(
  'FETCH_OWN_CHAT_ROOM_SUCCESS',
);

const fetchOwnConversationsSuccess = createActionCreator<{
  conversations: Conversation[];
}>('FETCH_OWN_CONVERSATIONS_SUCCESS');

export {
  signInSuccess,
  signUpSuccess,
  logout,
  getAllUsersSuccess,
  addOwnChatRoom,
  addChatRoomToUser,
  fetchOwnChatRoomsSuccess,
  fetchOwnConversationsSuccess,
};
