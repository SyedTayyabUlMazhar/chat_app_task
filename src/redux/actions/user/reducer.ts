import {createActionCreator} from '../../ActionCreator';
import {SignUpSuccessPayload} from './types';

const signInSuccess =
  createActionCreator<SignUpSuccessPayload>('SIGN_IN_SUCCESS');
const signUpSuccess =
  createActionCreator<SignUpSuccessPayload>('SIGN_UP_SUCCESS');

export {signInSuccess, signUpSuccess};
