import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './router';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAZGghgaxoX5vN_YCjMjVi5IMEfam1as1o',
      authDomain: 'everynote-1e6a4.firebaseapp.com',
      databaseURL: 'https://everynote-1e6a4.firebaseio.com',
      projectId: 'everynote-1e6a4',
      storageBucket: 'everynote-1e6a4.appspot.com',
      messagingSenderId: '631530737487'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
