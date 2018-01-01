import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity, Text, Dimensions, StatusBar } from 'react-native';
import Slides from '../components/common';


const SCREEN_WIDTH = Dimensions.get('window').width;

const slide = { 	
		id: 1, 
		text: 'Thank you for Signing Up.', 
		buttonText: 'Continue',
		textStyle: {
			color: '#fff',
			padding: 20,
		    fontSize: 16,
		    fontWeight: '500'
		}
		
	}

class SignupSuccessScreen extends Component {

	onSlidesComplete = () => {
		this.props.navigation.navigate('login');
	}

	render() {
		return (
			<View
	         style={styles.slideStyle}
	        >
	        	<StatusBar
			       	backgroundColor='#00665c'
			       	barStyle="light-content"
			    />
	            <Text style={slide.textStyle}>
	              {slide.text}
	            </Text>
	            <TouchableOpacity
		          onPress={this.onSlidesComplete}
		          style={styles.buttonStyle}
		        >
		          <Text style={styles.buttonTextStyle}>
		          {slide.buttonText}
		          </Text>
		        </TouchableOpacity>
          	</View>
		);
	}
}


const styles = {
  slideStyle: {
    width: SCREEN_WIDTH,
    backgroundColor: '#009688',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slideTextStyle: {
    // color: '#343433',
    color: '#fff',
    padding: 20,
    fontSize: 25,
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

export default connect(null)(SignupSuccessScreen);

