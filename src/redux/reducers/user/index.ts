import {createReducer} from '@reduxjs/toolkit';
import Actions from '../../actions';
import {UserReducerType} from './types';

const initialState: UserReducerType = {};

const UserReducer = createReducer(initialState, builder => {
  builder.addCase(Actions.User.Reducer.signUpSuccess, (state, action) => {
    state.user = action.payload.user;
  });
});

export default UserReducer;
