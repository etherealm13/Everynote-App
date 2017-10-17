import React, { Component } from 'react';
import {View, Text, Image } from 'react-native';

export class Logo extends Component {
  render() {
    return ( 
      <View style={{ flex: 1, alignItems: 'center'}}>
      <Image 
          source = {require('../../assets/images/logo.png')}
          style={styles.logoStyle}>
      </Image>
      <Text style={styles.logoTextStyle}>EveryNote
      </Text>
      

      </View>
    );
  }
}

const styles = {
  logoStyle: {
    width: 60,
    height: 60,
    // position: 'absolute',
    // top: 15,
    // left: 4,
    resizeMode: 'center',
  },
  logoTextStyle: {
    fontSize: 50,
    marginLeft: 20,
    color: '#009688',
    fontWeight: 'bold'
  }
};
