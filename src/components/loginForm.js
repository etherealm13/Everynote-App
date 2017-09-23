import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { emailChanged, checkAuth, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  componentWillMount() {
    this.props.checkAuth();
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  signupHandler() {
    Actions.signup();
    // this.props.loginUser({ email, password });
  }
  forgotPasswordHandler() {
    console.log('forgot password');
    // this.props.loginUser({ email, password });
  }


  renderButton() {
    if (this.props.loading) {
      return < Spinner size="large" />;
    }
    return (
      <Button style={styles.customButtonStyle} onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }
  render() {
    return (
      <View style={styles.bodyStyle}>
        <View style={styles.loginCardStyle}>
          <Text style={styles.logoStyle}>EveryNote
          </Text>
        </View>
        <View style={styles.loginCardStyle}>
          <Card>
            <CardSection>
              <Input
                label="Email"
                placeholder="email@gmail.com"
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
              />
            </CardSection>

            <CardSection>
              <Input
                secureTextEntry
                label="Password"
                placeholder="password"
                value={this.props.password}
                onChangeText={this.onPasswordChange.bind(this)}
              />
            </CardSection>
            <CardSection>
              {this.renderButton()}
            </CardSection>

            <CardSection>
              <Button
              customButtonStyle={styles.customButtonStyle}
              customTextStyle={styles.customTextStyle}
              onPress={this.signupHandler.bind(this)}
              >
                Signup
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
        </View>
      </View>
    );
  }
}

const styles = {
  bodyStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fcfce6'
  },
  buttonCardStyle: {
    borderBottomWidth: 0,
    padding: 0
  },
  customButtonStyle: {
    borderColor: '#fcfce6',
    borderWidth: 0,
    backgroundColor: '#fcfce6'
  },
  customTextStyle: {
    alignSelf: 'center',
    color: '#009688'
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  loginCardStyle: {
    // flex: 1,
    paddingBottom: 0,
    backgroundColor: '#fcfce6',
    padding: 0,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0
  },
  logoStyle: {
    fontSize: 40,
    color: '#009688',
    fontWeight: 'bold'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser, checkAuth
})(LoginForm);
