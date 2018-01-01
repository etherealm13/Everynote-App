import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './cardSection';
import { Button } from './button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { containerStyle, textStyle, buttonStyle, cardSectionStyle } = styles;
  return (
    <Modal
    visible={visible}
    transparent
    animationType='slide'
    onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>

        <CardSection style={cardSectionStyle}>
          <Button style={buttonStyle} onPress={onAccept}>Yes</Button>
          <Button style={buttonStyle} onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center',
    backgroundColor: '#EAF5F4',
    marginBottom: 0
  },
  textStyle: {
    color: '#111',
    flex: 1,
    fontSize: 18,
    textAlign: 'center'
    // lineHeight: 40
  },
  buttonStyle: {
    width: 100
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

export { Confirm };
