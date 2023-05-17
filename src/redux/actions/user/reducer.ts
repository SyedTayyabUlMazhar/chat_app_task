import {createActionCreator} from '../../ActionCreator';
import {SignUpSuccessPayload} from './types';

const signInSuccess = createActionCreator('SIGN_IN_SUCCESS');
const signUpSuccess =
  createActionCreator<SignUpSuccessPayload>('SIGN_UP_SUCCESS');

export {signInSuccess, signUpSuccess};
