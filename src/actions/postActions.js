import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  ADD_NOTE,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAIL,
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  GET_POST_DETAILS,
  EDIT_IN_PROGRESS,
  UPDATE_NOTE,
  UPDATE_NOTE_SUCCESS,
  CANCEL_EDIT,
  FORM_FIELD_UPDATE,
  FORM_FIELD_EDITED
} from './types';


export const postInputChanged = ({ prop, value }) => {
  return {
    type: FORM_FIELD_UPDATE,
    payload: { prop, value }
  };
};

export const postInputEdited = ({ prop, value }) => {
  return {
    type: FORM_FIELD_EDITED,
    payload: { prop, value }
  };
};

export function addNote(title, description, navigate) {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    dispatch({ type: ADD_NOTE });
    const dateStamp = new Date().toString();
    return firebase.database().ref(`/users/${currentUser.uid}/posts`)
    .push({ title, description, dateStamp })
    .then(() => {
      dispatch({ type: ADD_NOTE_SUCCESS });
      navigate('list');
    });
  };
}

export function updateNote(title, description, uid) {
  const { currentUser } = firebase.auth();
  const dateStamp = new Date().toString();

  return (dispatch) => {
    dispatch({ type: UPDATE_NOTE });
    return firebase.database().ref(`/users/${currentUser.uid}/posts/${uid}`)
    .set({
      title,
      description,
      dateStamp
     })
    .then(() => {
      dispatch({ type: UPDATE_NOTE_SUCCESS, payload: { title, description, uid } });
    });
  };
}


export function addNoteFail(dispatch, error) {
  dispatch({
    type: ADD_NOTE_FAIL,
    payload: error
  });
}

export function fetchPosts() {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    dispatch({ type: FETCH_POSTS });
    return firebase.database().ref(`/users/${currentUser.uid}/posts`)
    .on('value', snapshot => {
      dispatch({ type: FETCH_POSTS_SUCCESS, payload: snapshot.val() });
    });
  };
}

export function getPostDetails(post) {
  return (dispatch) => {
    // browserHistory.push(`posts/${post.uid}`);
    dispatch({ type: GET_POST_DETAILS, payload: post });
  };
}


export function editNote(post, navigate) {
  return (dispatch) => {
    dispatch({
      type: EDIT_IN_PROGRESS,
      payload: post
    });
    navigate('edit');
  };
}

export function cancelEdit(post) {
  return (dispatch) => {
    dispatch({
      type: CANCEL_EDIT,
      payload: post
    });
  };
}

// DELETE NOTE

export function deleteNote(id, navigate) {
  const user = firebase.auth().currentUser;
  return () => {
    firebase.database().ref(`users/${user.uid}/posts/`).child(id).remove()
    .then(() => {
        fetchPosts();
        navigate('list')
      });
  };
}
