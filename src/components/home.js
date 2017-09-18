import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Home extends React.Component {
  componentWillMount() {
    // this.props.checkAuth();
  }
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
    backgroundColor: '#fcfce6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#009688'
  }
});

export default Home;
