import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import WelcomeScreen from './screens/welcomeScreen';
import DemoScreen from './screens/demoScreen';
import LoginScreen from './screens/loginScreen';
import SignupScreen from './screens/signupScreen';
import SignupSuccessScreen from './screens/signupSuccessScreen';
import ForgotPasswordScreen from './screens/forgotPasswordScreen';
import ForgotPasswordSuccessScreen from './screens/forgotPasswordSuccessScreen';
import ResetPasswordScreen from './screens/resetPasswordScreen';
import ResetPasswordSuccessScreen from './screens/resetPasswordSuccessScreen';
import AddPostScreen from './screens/addPostScreen';
import EditPostScreen from './screens/editPostScreen';
import PostDetailScreen from './screens/postDetailScreen';
import PostsListScreen from './screens/postsListScreen';


export default class Router extends Component {
  render() {
      const MainNavigator = StackNavigator({
        welcome: { screen: WelcomeScreen,
          navigationOptions: {
            header: null,
          } 
        },
        auth: {
          screen: StackNavigator({
            login: { screen: LoginScreen },
            signup: { screen: SignupScreen },
            demo: { screen: DemoScreen },
            signupSuccess: { screen: SignupSuccessScreen },
            forgotPassword: { screen: ForgotPasswordScreen },
            forgotPasswordScreen: { screen: ForgotPasswordSuccessScreen },
            resetPassword: { screen: ResetPasswordScreen },
            resetPasswordSuccess: { screen: ResetPasswordSuccessScreen },
          },
          { headerMode: 'none' }),
        },
        main: {
          screen: StackNavigator({
            list: { screen: PostsListScreen },
            details: { screen: PostDetailScreen },
            add: { screen: AddPostScreen },
            edit: { screen: EditPostScreen },
          },
          {
            navigationOptions: {
              headerTintColor: '#fff',
              headerStyle: {
               backgroundColor:'#009688'
              }
            }
          },
          { headerMode: 'screen' }
          )
        }
      },
      { headerMode: 'none' },
      {
        lazy: true
      });
    return (
      <MainNavigator />
    );
  }
}
