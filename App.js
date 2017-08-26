import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>EveryNote</Text>
        <Text style={styles.textStyle}>A simple note taking app</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009688',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: 30,
    color: '#fff'
  },
  textStyle: {
    fontSize: 12,
    color: '#f3f3f3'
  }
});
