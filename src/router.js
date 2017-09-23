import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { logoutUser } from './actions/index';
import LoginForm from './components/loginForm';
import SignUpForm from './components/signUpForm';
import Home from './components/home';
import PostList from './components/postList';
import PostDetails from './components/postDetails';
import AddNoteForm from './components/addNoteForm';
import EditNoteForm from './components/editNoteForm';

class RouterComponent extends Component {

  logoutHandler() {
    this.props.logoutUser();
  }

  render() {
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
          component={SignUpForm}
          title="Sign Up"
        />
      </Scene>
      <Scene key="main">
        <Scene
          onRight={() => this.logoutHandler()}
          rightTitle="Logout"
          sceneStyle={styles.bodyStyle}
          rightButtonTextStyle={styles.navStyle}
          titleStyle={styles.titleStyle}
          key="posts"
          component={PostList}
          title="Posts"
        />
        <Scene
          sceneStyle={styles.bodyStyle}
          rightButtonTextStyle={styles.navStyle}
          titleStyle={styles.titleStyle}
          key="postDetails"
          component={PostDetails}
          title="View Post"
          onRight={() => this.logoutHandler()}
          rightTitle="Logout"
        />
        <Scene
          key="homePage"
          component={Home}
          title="Home"
        />
        <Scene
          key="addNote"
          component={AddNoteForm}
          title="Add Note"
          onRight={() => this.logoutHandler()}
          rightTitle="Logout"
          sceneStyle={styles.bodyStyle}
          rightButtonTextStyle={styles.navStyle}
          titleStyle={styles.titleStyle}
        />
        <Scene
          sceneStyle={styles.bodyStyle}
          rightButtonTextStyle={styles.navStyle}
          titleStyle={styles.titleStyle}
          key="editNote"
          component={EditNoteForm}
          title="Edit Note"
          onRight={() => this.logoutHandler()}
          rightTitle="Logout"
        />
      </Scene>
    </Router>
  );
  }
}


const styles = {
  navStyle: {
    color: '#009688'
  },
  titleStyle: {
    color: '#009688'
  },
  navBarTitleStyle: {
    color: '#cccccc'
  },
  bodyStyle: {
    backgroundColor: '#f7f9f7',
    paddingTop: 50
  }

}

export default connect(null, { logoutUser })(RouterComponent);
