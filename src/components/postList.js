import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { View, ListView } from 'react-native';
import ListItem from './listItem';
import { fetchPosts } from '../actions';
import { Spinner, AddNoteFab } from './common';

class PostList extends Component {
  componentWillMount() {
    console.log('componentWillMount');
    this.props.fetchPosts();
    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
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
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }

  renderRow(post) {
    return (
      <ListItem post={post} />
    );
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        {this.renderView()}
        <AddNoteFab />
      </View>
    );
  }
}


const styles = {
  viewStyle: {
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
