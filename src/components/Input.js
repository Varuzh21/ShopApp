import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function Input({
  value,
  iconSource,
  placeholder = "Enter text",
  inputStyle,
  containerStyle,
  iconStyle,
  secureTextEntry,
  onChangeText,
  errorMessage,
  isError = false,
}) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <>
      <View style={[
        styles.container,
        containerStyle,
        isFocused && !isError && styles.containerFocused,
        isError && styles.containerError,
      ]}>
        {iconSource && (
          <Icon
            name={iconSource}
            size={20}
            style={[
              styles.icon,
              iconStyle,
              isFocused && !isError && styles.iconFocused,
              isError && styles.iconError,
            ]}
            color={isError ? 'red' : (isFocused ? '#64B5F6' : 'rgb(150, 155, 170)')}
          />
        )}
        <TextInput
          value={value}
          secureTextEntry={secureTextEntry}
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor="rgb(150, 155, 170)"
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </View>
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </>
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
  },
  containerError: {
    borderColor: 'rgb(251, 113, 129)',
  },
  icon: {
    marginHorizontal: 10,
  },
  iconFocused: {
    color: '#64B5F6',
  },
  iconError: {
    color: 'rgb(251, 113, 129)',
  },
  input: {
    flex: 1,
    fontSize: 12,
    fontFamily: 'Poppins',
    color: "black",
  },
  errorText: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "700",
    color: 'rgb(251, 113, 129)',
  },
});