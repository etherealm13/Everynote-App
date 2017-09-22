import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Header</Text>
    </View>
  );
};
const styles = {
  viewStyle: {
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    backgroundColor: '#ffcccc',
    padding: 5,
    height: 60,
    elevation: 2,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20,
    color: '#343435'
  }
};

export { Header };
