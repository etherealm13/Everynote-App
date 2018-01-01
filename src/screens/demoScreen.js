import React, { Component } from 'react';
import { WebView } from 'react-native';

class DemoScreen extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://everynote-1e6a4.firebaseapp.com/#/demo'}}
      />
    );
  }
}

export default DemoScreen;


// https://everynote-1e6a4.firebaseapp.com/#/todos?_k=iw6kxf