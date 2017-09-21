import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { titleChanged, descriptionChanged, showModal, resetForm }
from '../../actions/index';
import { Card, CardSection, Input } from './index';

class NoteForm extends Component {
  onTitleChange(text) {
    this.props.titleChanged(text);
  }

  onDescriptionChange(text) {
    this.props.descriptionChanged(text);
  }

  render() {
    return (
        <View style={styles.loginCardStyle}>
          <Card>
            <CardSection style={styles.titleCardStyle}>
              <Input
                label="Title"
                placeholder="Title"
                onChangeText={this.onTitleChange.bind(this)}
                value={this.props.title}
              />
            </CardSection>
            <CardSection style={styles.DescriptionCardStyle}>
              <Input
                label="Description"
                placeholder="description"
                onChangeText={this.onDescriptionChange.bind(this)}
                value={this.props.description}
              />
            </CardSection>
          </Card>
        </View>
    );
  }
}

const styles = {
  loginCardStyle: {
    // flex: 1,
    paddingBottom: 0,
    backgroundColor: '#fcfce6',
    padding: 0,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0
  }
};


function mapStateToProps(state) {
  const { title, category, description } = state.post;
  return {
    title, category, description
  };
}

export default connect(mapStateToProps, {
   titleChanged,
   descriptionChanged,
   showModal,
   resetForm
})(NoteForm);
