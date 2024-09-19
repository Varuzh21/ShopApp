import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Password from '../assets/icons/password.svg';
import Mail from '../assets/icons/mail.svg';

export default function Input({
  iconSource,
  placeholder,
  inputStyle,
  containerStyle,
  iconStyle,
  secureTextEntry,
  onChangeText
}) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const Icon = iconSource === 'password' ? Password : Mail;

  return (
    <View style={[
      styles.container, 
      containerStyle, 
      isFocused && styles.containerFocused
    ]}>
      <Icon
        width={20}
        height={20}
        style={[
          styles.icon,
          iconStyle,
          isFocused && styles.iconFocused
        ]}
        fill={isFocused? '#64B5F6' : 'rgb(150, 155, 170)'}
      />
      <TextInput
        secureTextEntry={secureTextEntry} 
        style={[styles.input, inputStyle]}
        placeholder={placeholder || "Enter text"}
        placeholderTextColor="rgb(150, 155, 170)"
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
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
    borderColor: 'rgb(235, 240, 255)',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  containerFocused: {
    borderColor: 'rgb(64, 191, 255)',
    backgroundColor: 'rgb(255, 255, 255)',
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  iconFocused: {
    fill: '#64B5F6' 
  },
  input: {
    flex: 1,
    fontSize: 12,
    fontFamily: 'Poppins',
    color: "black",
  },
});