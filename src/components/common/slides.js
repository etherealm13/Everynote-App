import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity, StatusBar } from 'react-native';
import { Button } from './button';

const SCREEN_WIDTH = Dimensions.get('window').width;

export class Slides extends Component {
  
  renderLastSlide(index, slide) {
    const buttonText = (slide.buttonText ? slide.buttonText : 'Let\'s Get Started!');
    if(index === this.props.data.length - 1) {
      return (
        <TouchableOpacity
          onPress={this.props.onComplete}
          style={styles.buttonStyle}
        >
          <Text style={styles.buttonTextStyle}>
          {buttonText}
          </Text>
        </TouchableOpacity>
      );
    }
    else{
      return (
        <Text style={styles.nextTextStyle}>
          Swipe left to View Next.
        </Text>
      )
    }
  }

  renderSlides() {
    return this.props.data.map((slide, index) => {
        return (
          <View
            style={[ styles.slideStyle, { backgroundColor: slide.color } ]}
            key={slide.id}
          >
            <Text style={[styles.slideTextStyle, slide.textStyle]}>
              {slide.text}
            </Text>
            <Text style={[styles.slideSubTextStyle, slide.subTextStyle]}>
              {slide.subText}
            </Text>
            {this.renderLastSlide(index, slide)}
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
      <StatusBar
       backgroundColor='#433434'
       barStyle="light-content"
      />
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
    padding: 10,
    paddingBottom: 5,
    fontSize: 25,
    alignItems: 'center'
  },
  slideSubTextStyle: {
    // color: '#343433',
    color: '#fff',
    padding: 15,
    paddingTop: 5,
    fontSize: 18,
    alignItems: 'center'
  },
  nextTextStyle: {
    color: '#eee',
    padding: 20,
    fontSize: 14,
    alignSelf: 'center'
  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: '#009688',
    fontSize: 16,
    fontWeight: '600'
  },
  buttonStyle: {
    alignSelf: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#999',
    marginLeft: 0,
    marginRight: 0
  }
};
