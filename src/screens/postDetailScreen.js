import React, { Component } from 'react';
import { BackHandler, View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { Card, Button, Confirm, FullBackground } from '../components/common';
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

class PostDetailScreen extends Component {
	static navigationOptions = {
		headerTitle: 'View Post',
		headerTitleStyle: { 
			alignSelf: 'center'
		},
		headerLeft: null
	}

	componentWillMount() {
	    BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.navigation.navigate('list');
            return true; // This will prevent the regular handling of the back button
	    });
	}

  state = { showModal: false };
  onDecline() {
    this.setState({ showModal: false });
  }
  onAccept() {
    this.props.deleteNote(this.props.post.uid, this.props.navigation.navigate);
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
          onPress={() => this.props.editNote(this.props.post, this.props.navigation.navigate)}
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
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    margin: 15,
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
    alignItems: 'flex-start',
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

function mapStateToProps(state,props){
	return ({
    ...props.navigation.state.params
	});
}

export default connect(mapStateToProps, {
  deleteNote,
  editNote,
  titleUpdated,
  getPostDetails,
  descriptionUpdated,
  updateNote,
  showModal,
  resetForm })(PostDetailScreen);
