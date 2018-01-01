import React, { Component } from 'react';
import {View, Text, Image } from 'react-native';

export class Logo extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return ( 
      <View style={{ flex: 1, alignItems: 'center'}}>
      <Image 
          source = {require('../../assets/images/logo.png')}
          style={styles.logoStyle}>
      </Image>
      <Text style={[styles.logoTextStyle, this.props.customTextStyle ]}>EveryNote
      </Text>
      

      </View>
    );
  }
}

const styles = {
  logoStyle: {
    width: 60,
    height: 60,
    resizeMode: 'center',
  },
  logoTextStyle: {
    fontSize: 50,
    marginLeft: 20,
    color: '#009688',
    fontWeight: 'bold'
  }
};
