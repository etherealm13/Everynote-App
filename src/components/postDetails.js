import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
// import { Actions } from 'react-native-router-flux';
import { Card, Button, Confirm, FullBackground } from './common';
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
  state = { showModal: false };
  onDecline() {
    this.setState({ showModal: false });
  }
  onAccept() {
    this.props.deleteNote(this.props.post.uid);
    this.setState({ showModal: false });
  }

  filterDate() {
    let date = this.props.post.dateStamp;
    return moment(date).format('h:mm a, Do MMM, YY');
  }


  render() {
    const { title, description, dateStamp } = this.props.post;
    return (
      <FullBackground
        imageSrc="1"
      >
      <ScrollView>
        <Card style={styles.customCardStyle}>
          <Button
          style={styles.customButtonStyle}
          onPress={() => this.props.editNote(this.props.post)}
          >
            Edit
          </Button>
          <Button onPress={() => this.setState({ showModal: true })}>
            Delete
          </Button>
        </Card>
        <Card style={styles.cardStyle}>
          <View>
            <Text style={styles.titleStyle}>
              {title}
            </Text>
            <Text>
              {this.filterDate()}
            </Text>
          </View>
          <View>
             <Text style={styles.descriptionStyle}>
             {description}
            </Text>
          </View>
        </Card>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Delete this note ?
        </Confirm>

      </ScrollView>
      </FullBackground>
    );
  }
}

const styles = {
  customCardStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // height: 50,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    margin: 15,
    marginTop: 50,
    alignItems: 'center'
  },
  cardStyle: {
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
  },
  customButtonStyle: {
    borderBottomWidth: 0,
    backgroundColor: '#eee'
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
