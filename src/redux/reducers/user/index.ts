import {createReducer} from '@reduxjs/toolkit';
import Actions from '../../actions';
import {UserReducerType} from './types';

const initialState: UserReducerType = {};

const isSignUpOrSignInSuccessAction = (action: {type: string}) =>
  [
    Actions.User.Reducer.signInSuccess.type,
    Actions.User.Reducer.signUpSuccess.type,
  ].includes(action.type);

const UserReducer = createReducer(initialState, builder => {
  builder.addCase(Actions.User.Reducer.logout, () => initialState);
  builder.addMatcher(isSignUpOrSignInSuccessAction, (state, action) => {
    state.user = action.payload.user;
  });
});

export default UserReducer;
