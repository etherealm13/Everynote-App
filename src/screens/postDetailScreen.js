import React, { Component } from 'react';
import { BackHandler, View, Text, Button, ScrollView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { Card, CustomButton, Confirm, FullBackground } from '../components/common';
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

  componentWillMount(){
    
    this.props.navigation.setParams({
      home: () => this.homeLink()
    });
    
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.navigate('list');
      return true; // This will prevent the regular handling of the back button
    });
  }

  componentDidMount(){
    this.props.navigation.setParams({
      home: () => this.homeLink()
    });
    
  }

  homeLink(){
    this.props.navigation.navigate('list');
  }

	static navigationOptions = ({ navigation }) => {
    const {params} = navigation.state;

    return { 
      headerTitle: 'View Post',
      headerTitleStyle: { 
        alignSelf: 'center',
        marginLeft: 60
      },
      headerLeft: null,
      headerRight: (
        <Button
          color='rgba(255,255,255,0.1)'
          title='home'
          onPress={() => params.home && params.home()}
        />
      )
      // headerTintColor: 'blue'
    }
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
      <ScrollView style={{ backgroundColor: '#EAF5F4' }}>
        <StatusBar
         backgroundColor="#00665c"
         barStyle="light-content"
       />
        <Card style={styles.customCardStyle}>
          <CustomButton
          customButtonStyle={styles.customButtonStyle}
          onPress={() => this.props.editNote(this.props.post, this.props.navigation.navigate)}
          >
            Edit
          </CustomButton>
          <CustomButton customButtonStyle={styles.customButtonStyle} 
          onPress={() => this.setState({ showModal: true })}>
            Delete
          </CustomButton>
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
    );
  }
}

const styles = {
  customCardStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#fff',
    // borderColor: '#ccc',
    // borderWidth: 1,
    padding: 10,
    margin: 10,
    marginTop: 5,
    marginBottom: 5
    // alignItems: 'center'
  },
  cardStyle: {
    backgroundColor: '#EAF5F4',
    borderColor: '#eee',
    borderWidth: 1,
    padding: 15,
    paddingTop: 5,
    margin: 15,
    marginTop: 5
    // alignItems: 'center'
  },
  titleStyle: {
    alignSelf: 'center',
    fontSize: 20,
    padding: 10
  },
  descriptionStyle: {
    alignItems: 'flex-start',
    fontSize: 16,
    // padding: 10,
    lineHeight: 30,
    color: '#343535'
  },
  customButtonStyle: {
    padding: 10,
    width: 80
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
