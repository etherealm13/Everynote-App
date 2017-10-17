import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Image } from 'react-native';
import { checkAuth, inputChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner, FullBackground, Logo } from '../components/common';

class LoginScreen extends Component {
  	componentWillMount() {
    	this.props.checkAuth(this.props.navigation.navigate);
  	}



  onEmailChange(value) {
    this.props.inputChanged({ prop: 'email', value });
  }
  onPasswordChange(value) {
    this.props.inputChanged({ prop: 'password', value });
  }
  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  signupHandler() {
  	this.props.navigation.navigate('signup');
    // this.props.loginUser({ email, password });
  }
  forgotPasswordHandler() {
    console.log('forgot password');
    // this.props.loginUser({ email, password });
  }


  renderForm() {
    if (this.props.loading) {
      return (
          <Spinner size="large" />
        );
    }
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="xyz@email.com"
            value={this.props.email}
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="******"
            value={this.props.password}
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Button style={styles.customButtonStyle} onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>

        <CardSection>
          <Button
          customButtonStyle={styles.customButtonStyle}
          customTextStyle={styles.customTextStyle}
          onPress={this.signupHandler.bind(this)}
          >
            Create an Account!
          </Button>
          <Button
          customButtonStyle={styles.customButtonStyle}
          customTextStyle={styles.customTextStyle}
          onPress={this.forgotPasswordHandler.bind(this)}
          >
            Forgot Password ?
          </Button>
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
      </Card>
    );
  }
  render() {
    return (
        <FullBackground
          imageSrc="7"
        >
          <View style={styles.bodyStyle}>
            <View style={styles.loginCardStyle}>
            <Logo />
            </View>
            <View style={styles.loginCardStyle}>
             {this.renderForm()}
            </View>
          </View>
        </FullBackground>
    );
  }
}

const styles = {
  bodyStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)'
    // backgroundColor: 'rgba(255,255,255,0.2)'
  },
  buttonCardStyle: {
    borderBottomWidth: 0,
    padding: 0
  },
  customTextStyle: {
    alignSelf: 'center',
    color: '#fff'
  },
  customButtonStyle: {
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    borderColor: '#fff',
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  loginCardStyle: {
    // flex: 1,
    paddingBottom: 0,
    // backgroundColor: '#fcfce6',
    padding: 0,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    borderWidth: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading, authentication } = auth;
  return { email, password, error, loading, authentication };
};

export default connect(mapStateToProps, {
  inputChanged, loginUser, checkAuth
})(LoginScreen);
