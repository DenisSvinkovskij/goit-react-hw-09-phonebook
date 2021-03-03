import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const initialUserState = { name: null, email: null };
const user = createReducer(initialUserState, {
  [authActions.userRegistrationSuccess]: (state, { payload }) => payload.user,
  [authActions.userLoginSuccess]: (state, { payload }) => payload.user,
  [authActions.userLogoutSuccess]: () => initialUserState,
  [authActions.currentUserSuccess]: (state, { payload }) => payload,
});

const isLogedIn = createReducer(false, {
  [authActions.userRegistrationSuccess]: () => true,
  [authActions.userLoginSuccess]: () => true,
  [authActions.currentUserSuccess]: () => true,
  [authActions.currentUserError]: () => false,
  [authActions.userLogoutSuccess]: () => false,
  [authActions.userRegistrationError]: () => false,
  [authActions.userLoginError]: () => false,
});

const token = createReducer(null, {
  [authActions.userRegistrationSuccess]: (_, { payload }) => payload.token,
  [authActions.userLoginSuccess]: (_, { payload }) => payload.token,
  [authActions.userLogoutSuccess]: () => null,
});

const error = createReducer(null, {
  [authActions.userRegistrationError]: (_, { payload }) => payload,
  [authActions.userLoginError]: (_, { payload }) => payload,
  [authActions.userLogoutError]: (_, { payload }) => payload,
  [authActions.currentUserError]: (_, { payload }) => payload,
});

export default combineReducers({
  user,
  isLogedIn,
  token,
  error,
});
