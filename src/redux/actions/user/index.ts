import {Dispatch} from '@reduxjs/toolkit';
import {createActionCreator} from '../../ActionCreator';
import Actions from '..';

const signInSuccess = createActionCreator('SIGN_IN_SUCCESS');

const delay = (ms: number) => {
  return new Promise<void>(res => setTimeout(res, ms));
};
const signInRequest =
  (email: string, password: string) => async (dispatch: Dispatch) => {
    console.log('SigIn Loading:', {email, password});

    await delay(2000);
    console.log('SigIn Done:', {email, password});
    dispatch(Actions.User.signInSuccess({email, password}));
  };

export {signInSuccess, signInRequest};
