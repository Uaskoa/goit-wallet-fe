import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  loginSuccess,
  loginError,
  registerSuccess,
  registerError,
} from './auth-actions';

const initialUserState = { email: null, password: null };

const user = createReducer(initialUserState, {
    [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  //   [logoutSuccess]: () => initialUserState,
  //   [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
    [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  //   [logoutSuccess]: () => null,
});

const error = createReducer(null, {
    [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  //   [logoutError]: (_, { payload }) => payload,
  //   [getCurrentUserError]: (_, { payload }) => payload,
});

const isAuth = createReducer(false, {
    [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  //   [getCurrentUserSuccess]: () => true,
    [registerError]: () => false,
  [loginError]: () => false,
  //   [getCurrentUserError]: () => false,
  //   [logoutSuccess]: () => false,
});

export default combineReducers({
  user,
  isAuth,
  token,
  error,
});
