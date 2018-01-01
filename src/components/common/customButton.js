import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CustomButton = ({ onPress, children, customButtonStyle, customTextStyle }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[buttonStyle, customButtonStyle]}
    >
      <Text style={[textStyle, customTextStyle]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  buttonStyle: {
    // flex: 1,
    // alignSelf: 'center',
    backgroundColor: '#009688',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#999',
    padding: 10
  }
};
export { CustomButton };
