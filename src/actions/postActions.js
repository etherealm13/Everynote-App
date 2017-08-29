import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  TITLE_CHANGED,
  TITLE_UPDATED,
  DESCRIPTION_CHANGED,
  DESCRIPTION_UPDATED,
  ADD_NOTE,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAIL,
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  GET_POST_DETAILS,
  EDIT_NOTE,
  EDIT_IN_PROGRESS,
  EDIT_NOTE_SUCCESS,
  UPDATE_NOTE,
  UPDATE_NOTE_SUCCESS,
  CANCEL_EDIT,
  DELETE_NOTE
} from './types';

export function titleChanged(text) {
  return {
    type: TITLE_CHANGED,
    payload: text
  };
}


export function titleUpdated(text) {
  return {
    type: TITLE_UPDATED,
    payload: text
  };
}

export function descriptionUpdated(text) {
  return {
    type: DESCRIPTION_UPDATED,
    payload: text
  };
}

export function descriptionChanged(text) {
  return {
    type: DESCRIPTION_CHANGED,
    payload: text
  };
}

export function addNote(title, description) {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: ADD_NOTE });
    return firebase.database().ref(`/users/${currentUser.uid}/posts`)
    .push({ title, description })
    .then(() => {
      dispatch({ type: ADD_NOTE_SUCCESS });
      fetchPosts();
      // browserHistory.push('/posts');
    })
    .catch((error) => {
      return addNoteFail(dispatch, error.message);
    });
  };
}

export function updateNote(post) {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: UPDATE_NOTE });
    return firebase.database().ref(`/users/${currentUser.uid}/posts/${post.uid}`)
    .set({
      title: post.title,
      description: post.description })
    .then(() => {
      dispatch({ type: UPDATE_NOTE_SUCCESS, payload: post });
      // fetchPosts();
      // browserHistory.push('/posts');
    })
    // .catch((error) => {
    //   return addNoteFail(dispatch, error.message);
    // });
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
  console.log('auth user', currentUser);
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


export function editNote(post) {
  return (dispatch) => {
    dispatch({
      type: EDIT_IN_PROGRESS,
      payload: post
    });
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


export function deleteNote(id) {
  const user = firebase.auth().currentUser;
  return (dispatch) => {
    firebase.database().ref(`users/${user.uid}/posts/`).child(id).remove()
    .then(() => {
        fetchPosts();
        // browserHistory.push('/posts');
      });
  };
}
