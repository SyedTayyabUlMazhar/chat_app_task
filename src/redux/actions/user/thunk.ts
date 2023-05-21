import {ReactNativeFirebase} from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import {Action, Dispatch, ThunkAction} from '@reduxjs/toolkit';
import Actions from '..';
import {RootState} from '../..';
import Collections from '../../../collections';
import FirebaseUtil from '../../../utils/FirebaseUtil';
import MessageUtil from '../../../utils/MessageUtil';
import TimeUtil from '../../../utils/TimeUtil';
import {User} from '../../../types';

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
        MessageUtil.showError("Couldn't retrieve user's data");
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
      const userData: User = {
        uid: authResult.user.uid,
        email,
        name,
        chatRooms: [],
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

const logoutRequest = () => async (dispatch: Dispatch) => {
  await TimeUtil.delay(500);
  await auth().signOut();
  dispatch(Actions.User.Reducer.logout({}));
};

const getAllUsers =
  (): ThunkAction<Promise<{ok: boolean}>, RootState, {}, Action<any>> =>
  async (dispatch, getState) => {
    try {
      console.log('getAllUsers');
      const currentUserId = getState().user.user?.uid;

      const users = (
        await Collections.Users.where('uid', '!=', currentUserId).get()
      ).docs.map(doc => doc.data());

      dispatch(Actions.User.Reducer.getAllUsersSuccess({users}));

      return {ok: true};
    } catch (e) {
      FirebaseUtil.getFormattedError(
        e as ReactNativeFirebase.NativeFirebaseError,
      );
      return {ok: false};
    }
  };
export {signInRequest, signUpRequest, logoutRequest, getAllUsers};
