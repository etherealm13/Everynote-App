import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import Home from './components/home';
import PostList from './components/postList';
import PostDetails from './components/postDetails';

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
          component={PostList}
          title="Posts"
        />
        <Scene
          sceneStyle={{ paddingTop: 50 }}
          key="postDetails"
          component={PostDetails}
          title="View Post"
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
