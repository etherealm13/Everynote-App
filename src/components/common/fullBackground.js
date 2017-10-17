import React, { Component } from 'react';
import {View, Image } from 'react-native';
import {BackgroundImages} from './backgroundImages';

export class FullBackground extends Component {
  render() {
  const imageSrc = BackgroundImages[this.props.imageSrc];
    return ( 
      <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            // backgroundColor: 'rgba(0,0,0,0.6)'
          }}> 
      <Image 
          source = {imageSrc}
          style={styles.backgroundStyle}>
          {this.props.children}
      </Image>

      </View>
    );
  }
}

const styles = {
  backgroundStyle: {
    flex: 1,
    resizeMode: 'cover',
    width: null,
    height: null
  }
};
