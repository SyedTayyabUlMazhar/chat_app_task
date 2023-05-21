import {createReducer} from '@reduxjs/toolkit';
import Actions from '../../actions';
import {UserReducerType} from './types';

const initialState: UserReducerType = {
  users: [],
};

const isSignUpOrSignInSuccessAction = (action: {type: string}) =>
  [
    Actions.User.Reducer.signInSuccess.type,
    Actions.User.Reducer.signUpSuccess.type,
  ].includes(action.type);

const UserReducer = createReducer(initialState, builder => {
  builder.addCase(Actions.User.Reducer.logout, () => initialState);

  builder.addCase(Actions.User.Reducer.getAllUsersSuccess, (state, action) => {
    state.users = action.payload.users;
  });

  builder.addCase(Actions.User.Reducer.addOwnChatRoom, (state, action) => {
    state.user?.chatRooms.push(action.payload.room);
  });

  builder.addCase(Actions.User.Reducer.addChatRoomToUser, (state, action) => {
    state.users
      .find(user => user.uid === action.payload.userId)
      ?.chatRooms.push(action.payload.room);
  });

  builder.addMatcher(isSignUpOrSignInSuccessAction, (state, action) => {
    state.user = action.payload.user;
  });
});

export default UserReducer;
