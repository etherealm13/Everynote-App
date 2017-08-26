import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './src/components/common';

export default class App extends React.Component {
  componentWillMount() {
    let config = {
      apiKey: "AIzaSyAZGghgaxoX5vN_YCjMjVi5IMEfam1as1o",
      authDomain: "everynote-1e6a4.firebaseapp.com",
      databaseURL: "https://everynote-1e6a4.firebaseio.com",
      projectId: "everynote-1e6a4",
      storageBucket: "everynote-1e6a4.appspot.com",
      messagingSenderId: "631530737487"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./src/assets/images/icon.png')} />
        <Text style={styles.titleStyle}>EveryNote</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#009688'
  }
});
