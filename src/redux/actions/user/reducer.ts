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

export {signInSuccess, signUpSuccess, logout, getAllUsersSuccess};
