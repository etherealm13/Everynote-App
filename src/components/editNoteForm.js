import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { postInputEdited, updateNote, showModal, resetForm } from '../actions/index';
import { Card, CardSection, Input, Button } from './common';

class EditNoteForm extends Component {

  onTitleChange(value) {
    this.props.postInputEdited({ prop: 'title', value });
  }

  onDescriptionChange(value) {
    this.props.postInputEdited({ prop: 'description', value });
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
                onChangeText={value => this.props.postInputEdited({ prop: 'title', value })}
                value={this.props.title}
              />
            </CardSection>

            <CardSection style={styles.DescriptionCardStyle}>
              <Input
                label="Description"
                placeholder="description"
                onChangeText={value => this.props.postInputEdited({ prop: 'description', value })}
                value={this.props.description}
              />
            </CardSection>

            <CardSection style={styles.buttonCardStyle} >
              <Button onPress={this.handleFormSubmit.bind(this)}>
                Update Note
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
