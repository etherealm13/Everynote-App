import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import { Card } from './common';

class PostDetails extends Component {
  render() {
    const { title, description } = this.props.post;
    return (
      <ScrollView>
        <Card style={styles.cardStyle}>
          <View>
            <Text style={styles.titleStyle}>
            {title}
            </Text>
          </View>

          <View>
             <Text style={styles.descriptionStyle}>
             {description}
            </Text>
          </View>
        </Card>
      </ScrollView>
    );
  }
}

const styles = {
  cardStyle: {
    // flexDirection: 'row',
    // height: 50,
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
  }
};
export default PostDetails;
