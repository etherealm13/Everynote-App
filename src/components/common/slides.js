import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Button } from './button';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderLastSlide(index) {
    if(index === this.props.data.length - 1) {
      return (
        <TouchableOpacity
          onPress={this.props.onComplete}
          style={styles.buttonStyle}
        >
          <Text style={styles.textStyle}>
          I'm Ready !
          </Text>
        </TouchableOpacity>
      );
    }
  }

  renderSlides() {
    return this.props.data.map((slide, index) => {
        return (
          <View
            style={[ styles.slideStyle, { backgroundColor: slide.color } ]}
            key={slide.id}
          >
            <Text style={styles.slideTextStyle}>
              {slide.text}
            </Text>
            {this.renderLastSlide(index)}
          </View>
        )
    })
  }

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        style={{ flex: 1 }}
      >
      {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    width: SCREEN_WIDTH,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slideTextStyle: {
    // color: '#343433',
    color: '#fff',
    fontSize: 30,
    alignItems: 'center'
  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    alignSelf: 'center',
    backgroundColor: '#009688',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#999',
    marginLeft: 0,
    marginRight: 0
  }
};

export default Slides;
