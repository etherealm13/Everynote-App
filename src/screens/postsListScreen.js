import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { View, ListView, RefreshControl } from 'react-native';
import ListItem from '../components/listItem';
import { fetchPosts } from '../actions';
import { Spinner, AddNoteFab, FullBackground } from '../components/common';

class PostList extends Component {
	static navigationOptions = {
		headerTitle: 'Posts',
		headerTitleStyle: { 
			alignSelf: 'center'
		},
		headerLeft: null
	}
  state = {
      refreshing: false
  };

  componentWillMount() {
    this.props.fetchPosts();
    this.createDataSource(this.props);
  }
  
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  onRefresh() {
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
    this.dataSource = ds.cloneWithRows(sortedPosts);
  }

  renderView() {
    if (this.props.loading) {
      return < Spinner size="large" />;
    }
    return (
      <ListView
        refreshControl={
         <RefreshControl
           refreshing={this.state.refreshing}
           onRefresh={this.onRefresh.bind(this)}
         />
       }
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }

  renderRow = (post) => {
    return (
      <ListItem post={post} navigation = {this.props.navigation.navigate} />
    );
  }

  render() {
    return (
      <FullBackground
        imageSrc="1"
      >
        <View style={styles.viewStyle}>
          {this.renderView()}
          <AddNoteFab navigation = {this.props.navigation.navigate} />
        </View>
      </FullBackground>
    );
  }
}


const styles = {
  viewStyle: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    // backgroundColor: 'rgba(255,255,255,0.6)',
    flexGrow: 1
  }
};

function mapStateToProps(state) {
  const posts = _.map(state.post.posts, (val, uid) => {
    return { ...val, uid };
  });
  return { posts, loading: state.post.loading };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);
