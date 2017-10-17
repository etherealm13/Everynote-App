import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
// import _ from 'lodash';
import Slides from '../components/common/slides';

const SLIDE_DATA = [
	{ id: 1, text: 'Welcome to EveryNote', color: '#03a9f4' },
	{ id: 2, text: 'Simple Way to Store Notes', color: '#009688' }
];

class WelcomeScreen extends Component {
	state = { token: null }

	async componentWillMount() {
		let token = await AsyncStorage.getItem('auth_token');

		if (token) {
			this.props.navigation.navigate('auth');
			this.setState({ token });
		} else {
			this.setState({ token: false });
		}
	}

	onSlidesComplete() {
		this.props.navigation.navigate('auth');
	}

	render() {
		// if  (_.isNull(this.state.token)) {
		// 	 return <AppLoading />
		// }
		return (
			<View style= { {flex: 1} }>
				<Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete.bind(this)} />
			</View>
		);
	}
}

export default WelcomeScreen;
