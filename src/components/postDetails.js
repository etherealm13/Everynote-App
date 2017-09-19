import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
// import { Actions } from 'react-native-router-flux';
import { Card, Button } from './common';
import {
  deleteNote,
  editNote,
  titleUpdated,
  getPostDetails,
  descriptionUpdated,
  updateNote,
  showModal,
  resetForm
} from '../actions/index';

class PostDetails extends Component {
  render() {
    const { title, description, uid, dateStamp } = this.props.post;
    return (
      <ScrollView>
        <Card style={styles.cardStyle}>
        <Button onPress={() => this.props.editNote(this.props.post)}>
          Edit
        </Button>
        <Button onPress={() => this.props.deleteNote(uid)}>
          Delete
        </Button>
        </Card>
        <Card style={styles.cardStyle}>
          <View>
            <Text style={styles.titleStyle}>
              {title}
            </Text>
            <Text>
              {dateStamp}
            </Text>
          </View>
          <View>
             <Text style={styles.descriptionStyle}>
             {description}
            </Text>
          </View>
        </Card>
      </ScrollView>
    );
  }
}

const styles = {
  cardStyle: {
    // flexDirection: 'row',
    // height: 50,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    margin: 15,
    alignItems: 'center'
  },
  titleStyle: {
    fontSize: 20,
    padding: 10
  },
  descriptionStyle: {
    fontSize: 16,
    padding: 10,
    lineHeight: 30,
    color: '#343535'
  }
};

export default connect(null, {
  deleteNote,
  editNote,
  titleUpdated,
  getPostDetails,
  descriptionUpdated,
  updateNote,
  showModal,
  resetForm })(PostDetails);


  // function mapStateToProps(state) {
  // // console.log('state', state);
  //   if (state.post.postDetail != null) {
  //     // const { title, description, dateStamp, uid } = state.post.postDetail;
  //     return {
  //       post: state.post.postDetail,
  //       loading: state.post.loading,
  //       modal: state.modal,
  //       editing: state.post.editing,
  //       uid: state.post.postId,
  //       number: state.post.postNumber };
  //   }
  //   return {
  //     post: state.post,
  //     loading: state.post.loading,
  //     modalShow: state.modal.modalShow,
  //     editing: state.post.editing,
  //     uid: state.post.postId };
  // }
