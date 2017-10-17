import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, customButtonStyle, customTextStyle }) => {
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
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#009688',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#999',
    marginLeft: 0,
    marginRight: 0
  }
};
export { Button };
