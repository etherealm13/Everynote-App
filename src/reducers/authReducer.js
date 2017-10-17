import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SIGN_UP_USER,
  SIGN_UP_USER_SUCCESS,
  SIGN_UP_USER_FAIL,
  AUTH_FIELD_UPDATED,
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  FORM_RESET
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  authenticated: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FORM_RESET:
      return { ...INITIAL_STATE };
    case SIGN_UP_USER:
      return { ...state, loading: true };
    case SIGN_UP_USER_SUCCESS:
      return { ...state,
        ...INITIAL_STATE,
        user: action.payload,
        authenticated: true,
        loading: false };
    case SIGN_UP_USER_FAIL:
      return { ...state, authenticated: false, error: action.payload, loading: false };
     case AUTH_FIELD_UPDATED:
      return { ...state, [action.payload.prop]: action.payload.value };
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return {
        ...state, ...INITIAL_STATE, loading: false, user: action.payload, authenticated: true
      };
    case LOGIN_USER_FAIL:
      return { ...state, authenticated: false, loading: false, error: action.payload };
    case USER_LOGGED_IN:
      return { ...state, authenticated: true, user: action.payload };
    case USER_LOGGED_OUT:
      return { ...state, authenticated: false, user: null };
    case LOGOUT_USER_SUCCESS:
      return { ...state, authenticated: false, user: null, loading: false };
    case LOGOUT_USER_FAIL:
      return { ...state };
    default:
    return state;
  }
};
