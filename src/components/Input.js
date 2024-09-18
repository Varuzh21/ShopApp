import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';
import Password from '../assets/icons/password.svg';
import Mail from '../assets/icons/mail.svg';

export default function Input({ iconSource, placeholder, inputStyle, containerStyle, iconStyle, type, onChangeText }) {
  return (
    <View style={[styles.container, containerStyle]}>
      {iconSource == true ? (
        <Password width={20} height={20} style={[styles.icon, iconStyle]} />
      ): (
        <Mail width={20} height={20} style={[styles.icon, iconStyle]} />
      )}
      <TextInput
        secureTextEntry={type} 
        style={[styles.input, inputStyle]}
        placeholder={placeholder || "Enter text"}
        placeholderTextColor="rgb(150, 155, 170)"
        onChange={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    color: "black",
    borderColor: 'rgb(235, 240, 255)',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 12,
    fontFamily: 'Poppins',
    color: "black",
  },
});