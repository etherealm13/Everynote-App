import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Text, View, TouchableWithoutFeedback, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';
import { fetchPosts } from '../actions';

class ListItem extends Component {
  componentWillMount() {
    this.props.fetchPosts();
    this.createDataSource(this.props);
  }
  onRowPress() {
    // Actions.postView({ post: this.props.post });
  }
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ posts }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(posts);
  }

  renderRow(post) {
    const { title, description } = post;
    return (
      <TouchableWithoutFeedback>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
            {title}
            </Text>
            <Text style={styles.titleStyle}>
            {description}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      >
      </ListView>
    );
  }


}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

function mapStateToProps(state) {
  const posts = _.map(state.post.posts, (val, uid) => {
    return { ...val, uid };
  });
  console.log(posts, state.post);
  return { posts, loading: state.post.loading };
}

export default connect(mapStateToProps, { fetchPosts })(ListItem);
