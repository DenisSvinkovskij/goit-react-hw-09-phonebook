import { createAction } from '@reduxjs/toolkit';

const userRegistrationRequest = createAction('auth/userRegistrationRequest');
const userRegistrationSuccess = createAction('auth/userRegistrationSuccess');
const userRegistrationError = createAction('auth/userRegistrationRError');

const userLoginRequest = createAction('auth/userLoginRequest');
const userLoginSuccess = createAction('auth/userLoginSuccess');
const userLoginError = createAction('auth/userLoginRError');

const userLogoutRequest = createAction('auth/userLogoutRequest');
const userLogoutSuccess = createAction('auth/userLogoutSuccess');
const userLogoutError = createAction('auth/userLogoutRError');

const currentUserRequest = createAction('auth/currentUserRequest');
const currentUserSuccess = createAction('auth/currentUserSuccess');
const currentUserError = createAction('auth/currentUserError');

const exportedActions = {
  userRegistrationRequest,
  userRegistrationSuccess,
  userRegistrationError,
  userLoginRequest,
  userLoginSuccess,
  userLoginError,
  userLogoutRequest,
  userLogoutSuccess,
  userLogoutError,
  currentUserRequest,
  currentUserSuccess,
  currentUserError,
};
export default exportedActions;
