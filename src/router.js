import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import Home from './components/home';
import ListItem from './components/listItem';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth">
        <Scene
          key="login"
          component={LoginForm}
          hideNavBar
        />
        <Scene
          key="signup"
          component={LoginForm}
          title="Sign Up"
        />
      </Scene>
      <Scene key="main">
        <Scene
          sceneStyle={{ paddingTop: 50 }}
          key="posts"
          component={ListItem}
          title="Posts"
        />
        <Scene
          key="home"
          component={Home}
          hideNavBar
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
