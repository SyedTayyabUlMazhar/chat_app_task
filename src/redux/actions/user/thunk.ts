import {ReactNativeFirebase} from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import {Dispatch} from '@reduxjs/toolkit';
import Actions from '..';
import Collections from '../../../collections';
import FirebaseUtil from '../../../utils/FirebaseUtil';
import {Alert} from 'react-native';

const signInRequest =
  (email: string, password: string) => async (dispatch: Dispatch) => {
    try {
      const authResult = await auth().signInWithEmailAndPassword(
        email,
        password,
      );

      const userDoc = (
        await Collections.Users.doc(authResult.user.uid).get()
      ).data();
      if (!userDoc) {
        Alert.alert('Error', "Couldn't retrieve user's data");
        return {ok: false};
      }
      dispatch(Actions.User.Reducer.signInSuccess({user: userDoc}));
      return {ok: true};
    } catch (e: unknown) {
      FirebaseUtil.getFormattedError(
        e as ReactNativeFirebase.NativeFirebaseError,
      );
      return {ok: false};
    }
  };

const signUpRequest =
  (email: string, password: string, name: string) =>
  async (dispatch: Dispatch) => {
    try {
      const authResult = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
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
