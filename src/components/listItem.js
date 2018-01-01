import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { Card } from 'react-native-elements';
import {BackgroundColors} from './common/backgroundColors.js';

class ListItem extends Component {
  onRowPress() {
    this.props.navigation('details', {post: this.props.post});
  }

  checkIndex (n) {
      if(n % 5 == 0){
        return 5;
      }
      if(n % 3 == 0 && n % 4 == 0 ){
        return 3;
      }
      if(n % 6 == 0){
        return 4;
      }
      if(n % 2 != 0 && n % 3 == 0){
        return 2;
      }
      if(n % 2 == 0){
        return 0;
      }
      return 1;
  }

  filterDate() {
    let date = this.props.post.dateStamp;
    return moment(date).format('h:mm a, Do MMM, YY');
  }
  render() {
    const { title, uid, description } = this.props.post;
    return (
      <TouchableOpacity 
      style={[styles.cardRowStyle, 
      { backgroundColor: BackgroundColors[this.checkIndex(this.props.index)] } ]}
      onPress={this.onRowPress.bind(this)}
      >

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
  cardRowStyle: {
    backgroundColor: '#bbe3e8',
    width: 160,
    height: 170,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    paddingBottom: 25,
    margin: 10
  },
  cardStyle: {
    // flex:1,
  },
  titleStyle: {
    fontSize: 16,
    marginBottom: 5
  },
  dateStyle: {
    fontSize: 12,
    marginTop: 5,
    color: '#555'
  }
};
export default ListItem;
