import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

export class AddNoteFab extends Component {
  render() {
    return (
        <ActionButton buttonColor="rgba(0,150,136,1)">
          <ActionButton.Item
          buttonColor='#f4ba71' title="New Note"
          onPress={() => Actions.addNote()}
          >
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
    );
  }

}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
