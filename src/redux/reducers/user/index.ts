import {createReducer} from '@reduxjs/toolkit';
import Actions from '../../actions';

const UserReducer = createReducer({}, builder => {
  builder.addCase(Actions.User.signInSuccess, (state, action) => {
    console.log('Action: ', action, 'State:', state);
  });
});

export default UserReducer;
