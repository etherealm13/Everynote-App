import React from 'react';
import { TextInput, View, Text } from 'react-native';


      // <Text style={labelStyle}>{label}</Text>
const Input = (props) => {
  const { label, value, placeholder, onChangeText, secureTextEntry, style } = props;
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <TextInput
      secureTextEntry={secureTextEntry}
      underlineColorAndroid='transparent'
      autoCorrect={false}
      placeholderTextColor="#aaa"
      style={[styles.inputStyle, props.style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#fff',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    borderBottomColor: '#aaa',
    flex: 2,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
