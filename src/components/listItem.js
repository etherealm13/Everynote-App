import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { Card } from 'react-native-elements';
// import { Card } from './common';

class ListItem extends Component {
  onRowPress() {
    this.props.navigation('details', {post: this.props.post});
  }

  filterDate() {
    let date = this.props.post.dateStamp;
    return moment(date).format('h:mm a, Do MMM, YY');
  }
  render() {
    const { title, uid, description } = this.props.post;
    return (
      <TouchableOpacity onPress={this.onRowPress.bind(this)}>

      <Card
        style={styles.cardStyle}
        key={uid}
        title={title}
      >
        <Text
          style={styles.titleStyle}
          numberOfLines={2}
        >
        {description}
        </Text>
        <Text
          style={styles.dateStyle}
          numberOfLines={1}
        >
        {this.filterDate()}
        </Text>
      </Card>
      </TouchableOpacity>
    );
  }
}

const styles = {
  cardStyle: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    paddingBottom: 25,
    margin: 15
  },
  titleStyle: {
    fontSize: 18,
    marginBottom: 10
  },
  dateStyle: {
    fontSize: 12,
    marginTop: 10,
    color: '#555'
  }
};
export default ListItem;
