import { emailChanged, passwordChanged, signUpUser } from '../actions';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Text, View, Image } from 'react-native';
import { checkAuth, inputChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner, FullBackground, Logo } from './common';

class SignUpForm extends Component {
  
  onEmailChange(value) {
    this.props.inputChanged({ prop: 'email', value });
  }
  onPasswordChange(value) {
    this.props.inputChanged({ prop: 'password', value });
  }
  onButtonPress() {
    const { email, password } = this.props;
    this.props.signUpUser({ email, password });
  }
  loginHandler() {
    Actions.login();
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
            Signup
          </Button>
        </CardSection>

        <CardSection>
          <Button
          customButtonStyle={styles.customButtonStyle}
          customTextStyle={styles.customTextStyle}
          onPress={this.loginHandler.bind(this)}
          >
            I have an Account!
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
    backgroundColor: 'rgba(0,0,0,0.5)'
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
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, signUpUser
})(SignUpForm);