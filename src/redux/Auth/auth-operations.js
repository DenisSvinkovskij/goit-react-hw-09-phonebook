import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registrationUser = registerData => async dispatch => {
  dispatch(authActions.userRegistrationRequest());

  try {
    const { data } = await axios.post('/users/signup', registerData);

    token.set(data.token);
    dispatch(authActions.userRegistrationSuccess(data));
  } catch (error) {
    dispatch(authActions.userRegistrationError(error.message));
  }
};

const loginUser = loginData => async dispatch => {
  dispatch(authActions.userLoginRequest());

  try {
    const { data } = await axios.post('/users/login', loginData);

    token.set(data.token);

    dispatch(authActions.userLoginSuccess(data));
  } catch (error) {
    dispatch(authActions.userLoginError(error.message));
  }
};

const userLogout = () => async dispatch => {
  dispatch(authActions.userLogoutRequest());
  try {
    await axios.post('/users/logout');

    token.unset();

    dispatch(authActions.userLogoutSuccess());
  } catch (error) {
    dispatch(authActions.userLogoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const { auth } = getState();
  if (!auth.token) {
    return;
  }

  token.set(auth.token);

  dispatch(authActions.currentUserRequest());
  try {
    const { data } = await axios.get('/users/current');

    dispatch(authActions.currentUserSuccess(data));
  } catch (error) {
    dispatch(authActions.currentUserError(error.message));
  }
};

const exportedOperations = {
  registrationUser,
  loginUser,
  userLogout,
  getCurrentUser,
};

export default exportedOperations;
