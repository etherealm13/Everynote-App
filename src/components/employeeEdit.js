import React, { Component } from 'react';
import _ from 'lodash';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Confirm } from './common';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeForm from './employeeForm';


class EmployeeEdit extends Component {
  state = { showModal: false };
  componentWillMount() {
    // TODO: Make a new action to edit the employee
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }
  onDecline() {
    this.setState({ showModal: false });
  }
  onAccept() {
    this.props.employeeDelete({ uid: this.props.employee.uid });
  }
  sendMessage() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }
  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}
          > Save Changes </Button>
        </CardSection>
        <CardSection>
          <Button
            onPress={this.sendMessage.bind(this)}
          > Text Schedule </Button>
        </CardSection>
        <CardSection>
          <Button
            onPress={() => this.setState({ showModal: true })}
          > Fire Employee</Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Delete this employee ?
        </Confirm>

      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
