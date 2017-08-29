import {
  TITLE_CHANGED,
  TITLE_UPDATED,
  DESCRIPTION_CHANGED,
  DESCRIPTION_UPDATED,
  ADD_NOTE,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAIL,
  DELETE_NOTE,
  EDIT_NOTE,
  EDIT_IN_PROGRESS,
  EDIT_NOTE_SUCCESS,
  CANCEL_EDIT,
  UPDATE_NOTE,
  UPDATE_NOTE_SUCCESS,
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  GET_POST_DETAILS,
  FORM_RESET
} from '../actions/types';

const INITIAL_STATE = {
  title: '',
  description: '',
  user: null,
  authenticated: null,
  error: '',
  loading: false,
  editing: false,
  posts: {},
  postDetail: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FORM_RESET:
      return { ...INITIAL_STATE };
    case TITLE_CHANGED:
      return { ...state, title: action.payload };
    case DESCRIPTION_CHANGED:
      return { ...state, description: action.payload };
    case TITLE_UPDATED:
      return { ...state, postDetail: { ...state.postDetail, title: action.payload } };
    case DESCRIPTION_UPDATED:
      return { ...state, postDetail: { ...state.postDetail, description: action.payload } };
    case ADD_NOTE:
      return { ...state, loading: true };
    case ADD_NOTE_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    case ADD_NOTE_FAIL:
      return { ...state };
    case FETCH_POSTS:
      return { ...state, loading: true };
    case FETCH_POSTS_SUCCESS:
      console.log(action.payload);
      return { ...state, ...INITIAL_STATE, posts: action.payload };
    case GET_POST_DETAILS:
      return { ...state, postDetail: action.payload };
    case EDIT_NOTE:
      return { ...state, loading: true };
    case EDIT_IN_PROGRESS:
      return { ...state, ...INITIAL_STATE, editing: true, postDetail: action.payload };
    case EDIT_NOTE_SUCCESS:
      return { ...state, loading: false };
    case CANCEL_EDIT:
      return { ...state, editing: false, postDetail: action.payload };
    case UPDATE_NOTE:
      return { ...state, loading: true };
    case UPDATE_NOTE_SUCCESS:
      return { ...state, ...INITIAL_STATE, postDetail: action.payload };
    default:
    return state;
  }
};
