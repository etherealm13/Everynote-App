import firebase from 'firebase';
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  EMAIL_CHANGED,
  SIGN_UP_USER,
  SIGN_UP_USER_FAIL,
  SIGN_UP_USER_SUCCESS,
  PASSWORD_CHANGED,
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  AUTH_FIELD_UPDATED,
  FORM_RESET
} from './types';

export function checkAuth(navigate) {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: USER_LOGGED_IN, payload: user });
        navigate('list');
      } else {
        return logoutUserSuccess(dispatch);
      }
    });
  };
}

export function resetForm() {
  return {
    type: FORM_RESET
  };
}


export const inputChanged = ({ prop, value }) => {
  return {
    type: AUTH_FIELD_UPDATED,
    payload: { prop, value }
  };
};


export function loginUser({ email, password }) {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch((error) => {
      return loginUserFail(dispatch, error.message);
    });
  };
}

export function signup(email, password) {
  return (dispatch) => {
    dispatch({ type: SIGN_UP_USER });
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => signUpUserSuccess(dispatch, user))
      .catch((error) => {
        return signUpUserFail(dispatch, error.message);
      });
  };
}


export function signUpUserSuccess(dispatch, user) {
  dispatch({ type: SIGN_UP_USER_SUCCESS, payload: user });
}


export function signUpUserFail(dispatch, error) {
  dispatch({
    type: SIGN_UP_USER_FAIL,
    payload: error
  });
}


export function loginUserSuccess(dispatch, user) {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
}


export function loginUserFail(dispatch, error) {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: error
  });
}

export function logoutUser(navigation) {
  return (dispatch) => {
    firebase.auth().signOut()
    .then(() => {
      navigation.navigate('auth');
      return logoutUserSuccess(dispatch);
    })
    .catch((error) => {
      return logoutUserFail(dispatch, error.message);
    });
  };
}


export function logoutUserSuccess(dispatch) {
  dispatch({
    type: LOGOUT_USER_SUCCESS
  });
}


export function logoutUserFail(dispatch, error) {
  dispatch({
    type: LOGOUT_USER_FAIL,
    payload: error
  });
}
