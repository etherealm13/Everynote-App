import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import { postInputChanged, addNote, showModal, resetForm } from '../actions/index';
import { Card, CardSection, Input, Button, Confirm } from './common';

class AddNoteForm extends Component {
  state = { showModal: false,
            behavior: 'padding' 
      // there is three ways to adjust (position , height , padding ) 
  }

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
      this.props.addNote(this.props.title, this.props.description);
    }
  }

  render() {
    return (
      <View style={styles.bodyStyle} >
        <View style={styles.loginCardStyle}>
          <Card>
            <KeyboardAvoidingView behavior={this.state.behavior}>
            <CardSection style={styles.titleCardStyle}>
              <Input
                placeholder="Enter Title Here"
                underlineColorAndroid={'transparent'}
                onChangeText={value => this.props.postInputChanged({ prop: 'title', value })}
                value={this.props.title}
                style={styles.inputStyle}
              />
            </CardSection>
            </KeyboardAvoidingView>
            <CardSection style={styles.DescriptionCardStyle}>
              <TextInput
                style={styles.DescriptionInputStyle}
                multiline={true}
                maxHeight={300}
                autogrow={true}
                underlineColorAndroid={'transparent'}
                numberOfLines={4}
                textAlignVertical={'top'}
                placeholder="Enter Description Here"
                onChangeText={value => this.props.postInputChanged({ prop: 'description', value })}
                value={this.props.description}
              />
            </CardSection>
          </Card>
        </View>
        <View style={styles.loginCardStyle}>
          <Card>
            <CardSection style={styles.buttonCardStyle} >
              <Button onPress={this.handleFormSubmit.bind(this)}>
                Add Note
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
  const { title, description } = state.post;
  return {
    title, description, pageTitle: "Add New Note"
  };
}

export default connect(mapStateToProps, {
   postInputChanged,
   addNote,
   showModal,
   resetForm
})(AddNoteForm);
