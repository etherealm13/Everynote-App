import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card } from './common';

class ListItem extends Component {
  onRowPress() {
    Actions.postDetails({ post: this.props.post });
  }
  render() {
    const { title } = this.props.post;
    return (
      <TouchableOpacity onPress={this.onRowPress.bind(this)}>
        <Card style={styles.cardStyle}>
          <View>
            <Text style={styles.titleStyle}>
            {title}
            </Text>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}

const styles = {
  cardStyle: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    margin: 15,
    alignItems: 'center'
  },
  titleStyle: {
    fontSize: 18,
    padding: 10
  },
  descriptionStyle: {
    fontSize: 14,
    padding: 10
  }
};
export default ListItem;
