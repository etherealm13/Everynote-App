import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ResetPassWordScreen extends Component {
	render() {
		return (
			<View>
			<Text>ResetPassWordScreen</Text>
			</View>
		);
	}
}

export default connect(null, actions)(ResetPassWordScreen);