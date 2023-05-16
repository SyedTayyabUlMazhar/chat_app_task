import {Dispatch} from '@reduxjs/toolkit';
import Actions from '..';

const delay = (ms: number) => {
  return new Promise<void>(res => setTimeout(res, ms));
};
const signInRequest =
  (email: string, password: string) => async (dispatch: Dispatch) => {
    console.log('SigIn Loading:', {email, password});

    await delay(2000);
    console.log('SigIn Done:', {email, password});
    dispatch(Actions.User.Reducer.signInSuccess({email, password}));
  };

export {signInRequest};
