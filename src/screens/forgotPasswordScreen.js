import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ForgotPasswordScreen extends Component {
	render() {
		return (
			<View>
			<Text>ForgotPasswordScreen</Text>
			</View>
		);
	}
}

export default connect(null, actions)(ForgotPasswordScreen);