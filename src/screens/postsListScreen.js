import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { View, Text, ListView, TouchableOpacity, Button, RefreshControl, StatusBar } from 'react-native';
import ListItem from '../components/listItem';
import { fetchPosts, logoutUser } from '../actions';
import { Spinner, Card, Confirm, AddNoteFab, FullBackground } from '../components/common';

class PostList extends Component {

  state = {
      refreshing: false,
      showModal: false
  };
  componentWillMount(){
    this.props.navigation.setParams({
      logout: () => this.setState({ showModal: true })
    });
    this.props.fetchPosts();
  }

  onDecline() {
    this.setState({ showModal: false });
  }
  onAccept() {
    this.props.logoutUser(this.props.navigation);
    this.setState({ showModal: false });
  }

  static navigationOptions = ({ navigation }) => {
    const {params} = navigation.state;
    // if(navigation.state.params != undefined) {
    return {
      headerTitle: 'Posts',
      headerTitleStyle: { 
        alignSelf: 'center',
        marginLeft: 60
      },
      headerLeft: null,
      headerRight: (
        <Button
          color='rgba(255,255,255,0)'
          title='logout'
          onPress={() => params.logout && params.logout()}
        />
      )
      // headerTintColor: 'blue'
      // }
    }
  }

  
  componentWillUpdate(nextProps) {
    if(nextProps.posts.length > 0){ 
        this.createDataSource(nextProps);
    }
  }

  onRefresh =() => {
    this.setState({ refreshing: true });
    this.props.fetchPosts();
    this.setState({ refreshing: false });
  }

  createDataSource({ posts }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    let sortedPosts = posts.sort((a, b) => {
        return new Date(b.dateStamp) - new Date(a.dateStamp)
    });
    this.makeData = ds.cloneWithRows(sortedPosts.slice());
  }

  renderView() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    if(this.props.posts.length > 0 && this.makeData != undefined){
      console.log('here');
      return (
        <ListView
          contentContainerStyle={styles.viewStyle}
          refreshControl={
            <RefreshControl
             refreshing={this.state.refreshing}
             onRefresh={this.onRefresh}
             tintColor='#009688'
            />
         }
          enableEmptySections
          dataSource={this.makeData}
          renderRow={(rowData, sectionID, rowID) => this.renderRow(rowData, sectionID, rowID) }
        />
      )
    }
    return(

      <TouchableOpacity onPress={() => this.props.navigation.navigate('add')}
      style={styles.cardStyle}
      >
        <Text
          style={styles.titleStyle}
        >
          No Posts found !! 
        </Text>
        <Text
          style={[styles.titleStyle, {color: '#009688'} ]}
        >
          Click to Add.
        </Text>
      </TouchableOpacity>
    );
  }

  renderRow = (rowData, sectionID, rowID) => {
    return (
      <ListItem post={rowData} index={rowID} navigation = {this.props.navigation.navigate} />
    );
  }

  render() {
    return (
      // <FullBackground
      //   imageSrc="2"
      // >
      <View style={{ flex: 1 }} >
        <StatusBar
         backgroundColor="#00665c"
         barStyle="light-content"
       />
          {this.renderView()}
          <AddNoteFab navigation = {this.props.navigation.navigate} />
          <Confirm
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
          >
            Do you want to logout ?
          </Confirm>
      </View>
      // </FullBackground>
    );
  }
}


const styles = {  
  viewStyle: {
    alignItems: 'flex-start',
    // backgroundColor: 'rgba(255,255,255,0.6)',
    backgroundColor: '#EAF5F4',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  cardStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    paddingBottom: 25,
    marginTop: 25
  },
  titleStyle: {
    fontSize: 16,
    marginBottom: 10,
    padding: 5
  }
};

function mapStateToProps(state) {
  const posts = _.map(state.post.posts, (val, uid) => {
    return { ...val, uid };
  });
  return { posts, loading: state.post.loading };
}

export default connect(mapStateToProps, { fetchPosts, logoutUser })(PostList);
