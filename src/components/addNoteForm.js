import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { titleChanged, descriptionChanged, addNote, showModal, resetForm } from '../actions/index';
import { Card, CardSection, Input, Button } from './common';

class AddNoteForm extends Component {
  onTitleChange(text) {
    this.props.titleChanged(text);
  }

  onDescriptionChange(text) {
    this.props.descriptionChanged(text);
  }

  handleFormSubmit() {
    if (this.props.title !== '' && this.props.description !== '') {
      this.props.addNote(this.props.title, this.props.description);
    }
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
            <CardSection style={styles.titleCardStyle}>
              <Input
                label="Title"
                placeholder="Title"
                onChangeText={this.onTitleChange.bind(this)}
                value={this.props.title}
              />
            </CardSection>

            <CardSection style={styles.DescriptionCardStyle}>
              <Input
                label="Description"
                placeholder="description"
                onChangeText={this.onDescriptionChange.bind(this)}
                value={this.props.description}
              />
            </CardSection>

            <CardSection style={styles.buttonCardStyle} >
              <Button onPress={this.handleFormSubmit.bind(this)}>
                Add Note
              </Button>
            </CardSection>
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
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    height: 80,
    lineHeight: 23,
    borderBottomColor: '#ccc',
    flex: 2,
  }
};


function mapStateToProps(state) {
  const { title, category, description } = state.post;
  return {
    title, category, description
  };
}

export default connect(mapStateToProps, {
   titleChanged,
   descriptionChanged,
   addNote,
   showModal,
   resetForm
})(AddNoteForm);
