import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/images/icon.png')} />
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
