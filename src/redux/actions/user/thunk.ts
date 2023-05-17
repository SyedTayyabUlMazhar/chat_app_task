import {ReactNativeFirebase} from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import {Dispatch} from '@reduxjs/toolkit';
import Actions from '..';
import Collections from '../../../collections';
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

const signUpRequest =
  (email: string, password: string, name: string) =>
  async (dispatch: Dispatch) => {
    try {
      const authResult = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log(authResult);
      const userData = {
        uid: authResult.user.uid,
        email,
        name,
      };
      await Collections.Users.doc(authResult.user.uid).set(userData);
      dispatch(Actions.User.Reducer.signUpSuccess({user: userData}));
      return {ok: true};
    } catch (e: unknown) {
      FirebaseUtil.getFormattedError(
        e as ReactNativeFirebase.NativeFirebaseError,
      );
      return {ok: false};
    }
  };

export {signInRequest, signUpRequest};
