import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Slides, Spinner, Logo } from '../components/common';
import { checkAuth } from '../actions';


const SLIDE_DATA = [
	{ 
		id: 1, 
		text: 'Welcome to EveryNote', 
		subText: 'Store Notes', 
		color: '#03a9f4'
	},
	{ 
		id: 2, 
		text: 'Problem Remembering things ?', 
		subText: 'With our App, you can Store, Edit and Manage Notes.', 
		color: '#009688'
	}
	// { 
	// 	id: 3, 
	// 	text: 'Increase Productivity !', 
	// 	subText: 'Using The Todo List', 
	// 	color: '#F78C6A'
	// }
];

class WelcomeScreen extends Component {
	componentWillMount() {
	  	this.props.checkAuth(this.props.navigation.navigate);
	}
	onSlidesComplete() {
      this.props.navigation.navigate('auth');
	}

	render() {
		if (this.props.loading) {
	      	return (
	          	<View style={styles.loginCardStyle}>
		      		<StatusBar
				       backgroundColor='#00665c'
				       barStyle="light-content"
				      />
		            <Logo customTextStyle={styles.textStyle} />
	            </View>
	        );
	    }
		return (
			<View style= {{ flex: 1 }}>
				<Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete.bind(this)} />
			</View>
		);
	}
}

const styles = {
	loginCardStyle: {
	    paddingBottom: 0,
	    backgroundColor: '#009688',
	    padding: 0,
	    flex: 1,
	    borderWidth: 0,
	    flexDirection: 'row',
	    justifyContent: 'center',
	    alignItems: 'center'
  	},
  	textStyle: {
  		color: '#fff'
  	}
}


const mapStateToProps = ({ auth }) => {
  const { loading, authentication } = auth;
  return { loading, authentication };
};

export default connect(mapStateToProps, {checkAuth})(WelcomeScreen);
