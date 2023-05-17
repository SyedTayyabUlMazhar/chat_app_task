import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {Dispatch} from '@reduxjs/toolkit';
import Actions from '..';
import FirebaseUtil from '../../../utils/FirebaseUtil';

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

const signUpRequest = (email: string, password: string) => async () => {
  try {
    const result = await auth().createUserWithEmailAndPassword(email, password);
    console.log(result);
    return {ok: true, data: result};
  } catch (e: unknown) {
    FirebaseUtil.getFormattedError(
      e as FirebaseAuthTypes.NativeFirebaseAuthError,
    );
    return {ok: false};
  }
};

export {signInRequest, signUpRequest};
