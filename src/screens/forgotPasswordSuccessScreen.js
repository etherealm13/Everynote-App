import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ForgotPasswordScreenSuccess extends Component {
	render() {
		return (
			<View>
			<Text>ForgotPasswordScreenSuccess</Text>
			</View>
		);
	}
}

export default connect(null, actions)(ForgotPasswordScreenSuccess);