import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import { postInputEdited, updateNote, showModal, resetForm } from '../actions/index';
import { Card, CardSection, Input, Button, Confirm } from './common';

class EditNoteForm extends Component {
  state = { showModal: false };

  componentWillMount(){
  }

  onDecline() {
    this.setState({ showModal: true });
  }
  onAccept() {
    this.setState({ showModal: false });
  }


  handleFormSubmit() {
    if (this.props.title !== '' && this.props.description !== '') {
      this.props.updateNote(this.props.title, this.props.description, this.props.uid)
      .then(() => {
        Actions.postDetails({ post: this.props.post });
      });
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior={'height'} style={styles.bodyStyle}>
        <View style={styles.loginCardStyle}>
          <Card>
            <CardSection style={styles.titleCardStyle}>
              <Input
                placeholder="Enter Title Here"
                underlineColorAndroid={'transparent'}
                onChangeText={value => this.props.postInputEdited({ prop: 'title', value })}
                value={this.props.title}
                style={styles.inputStyle}
              />
            </CardSection>

            <CardSection style={styles.DescriptionCardStyle}>
              <TextInput
                style={styles.DescriptionInputStyle}
                multiline={true}
                maxHeight={400}
                autogrow={true}
                numberOfLines={4}
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
    backgroundColor: '#fcfce6'
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
  },
  inputStyle: {
    color: '#000',
    fontSize: 18,
    borderBottomColor: 'rgba(0,0,0,0)'
  }
};


function mapStateToProps(state) {
  // const { title, category, description, uid } = state.post.postDetail;
  return {
    title: state.post.postDetail.title,
    category: state.post.postDetail.category,
    description: state.post.postDetail.description,
    uid: state.post.postDetail.uid,
    post: state.post.postDetail
  };
}

export default connect(mapStateToProps, {
   postInputEdited,
   updateNote,
   showModal,
   resetForm
})(EditNoteForm);
