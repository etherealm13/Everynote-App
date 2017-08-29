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
      apiKey: 'AIzaSyAagI1ba1Q5bD7QQjmToL5fFcqgJkMatP4',
      authDomain: 'manager-3d17a.firebaseapp.com',
      databaseURL: 'https://manager-3d17a.firebaseio.com',
      projectId: 'manager-3d17a',
      storageBucket: 'manager-3d17a.appspot.com',
      messagingSenderId: '605106866005'
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
