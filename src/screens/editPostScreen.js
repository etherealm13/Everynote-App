import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TextInput, KeyboardAvoidingView, BackHandler, StatusBar } from 'react-native';
import { postInputEdited, updateNote, showModal, resetForm } from '../actions/index';
import { Card, CardSection, Input, Button, Confirm } from '../components/common';

class EditPostScreen extends Component {
  componentWillMount(){
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.setState({ showModal: true });
      return true; // This will prevent the regular handling of the back button
    });
  }

	static navigationOptions = {
		headerTitle: 'Edit Post',
		headerTitleStyle: { 
		  alignSelf: 'center'
		},
		headerLeft: null
	}
  state = { showModal: false, behavior: 'height' };

  onDecline() {
    this.setState({ showModal: false });
  }
  onAccept() {
    this.setState({ showModal: false });
    this.props.navigation.navigate('details', {post: this.props.post});
  }


  handleFormSubmit() {
    if (this.props.title !== '' && this.props.description !== '') {
      this.props.updateNote(this.props.title, this.props.description, this.props.uid)
      .then(() => {
      	this.props.navigation.navigate('details', {post: this.props.post});
      });
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior={this.state.behavior} style={styles.bodyStyle}>
        <View style={styles.loginCardStyle}>
          <StatusBar
           backgroundColor="#00665c"
           barStyle="light-content"
          />
          <Card>
        	<Text>Title</Text>
            <CardSection style={styles.titleCardStyle}>
              <Input
              	label="Title"
                placeholder="Enter Title Here"
                underlineColorAndroid={'transparent'}
                onChangeText={value => this.props.postInputEdited({ prop: 'title', value })}
                value={this.props.title}
                style={styles.inputStyle}
              />
            </CardSection>

            <Text>Description</Text>
            <CardSection style={styles.DescriptionCardStyle}>
              <TextInput
              	label="Description"
                style={styles.DescriptionInputStyle}
                multiline={true}
                maxHeight={400}
                autogrow={true}
                numberOfLines={8}
                underlineColorAndroid={'transparent'}
                textAlignVertical={'top'}
                placeholder="Enter Description Here"
                onChangeText={value => this.props.postInputEdited({ prop: 'description', value })}
                value={this.props.description}
              />
            </CardSection>
          </Card>
        </View>
        <View style={styles.loginCardStyle}>
          <Card>
            <CardSection style={styles.buttonCardStyle} >
              <Button onPress={this.handleFormSubmit.bind(this)}>
                Update Note
              </Button>
              <Button onPress={() => this.setState({ showModal: true })}>
                Cancel
              </Button>
            </CardSection>
          </Card>
        </View>
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Do you want to cancel ?
          All unsaved data will be lost.
        </Confirm>
      </KeyboardAvoidingView>
    );
  }
}

const styles = {
  bodyStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#EAF5F4'
  },
  buttonCardStyle: {
    borderBottomWidth: 0,
    padding: 0
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  DescriptionInputStyle: {
    flex: 1,
    fontSize: 18
  },
  loginCardStyle: {
    // flex: 1,
    paddingBottom: 0,
    backgroundColor: '#EAF5F4',
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
  },
  inputStyle: {
    color: '#000',
    fontSize: 18,
    borderBottomColor: 'rgba(0,0,0,0)'
  }
};


function mapStateToProps(state) {
  const { title, category, description, uid } = state.post.postDetail;
  return {
    title,
    category,
    description,
    uid,
    post: state.post.postDetail
  };
}

export default connect(mapStateToProps, {
   postInputEdited,
   updateNote,
   showModal,
   resetForm
})(EditPostScreen);
