import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import GoogleIcon from '../assets/icons/google.svg';
import FacebookIcon from '../assets/icons/facebook.svg';

export default function Button({ title, customStyle, textStyle, onClickButton, iconSource, isLoading = false }) {
  return (
    <TouchableOpacity
      style={customStyle ? customStyle : styles.container}
      onPress={onClickButton}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <>
          {iconSource && (
            iconSource === 'google' ? (
              <GoogleIcon style={{ width: '20%' }} />
            ) : (
              <FacebookIcon style={{ width: '20%' }} />
            )
          )}
          <Text style={textStyle ? textStyle : styles.text}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    backgroundColor: 'rgb(64, 191, 255)',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
    shadowColor: 'rgb(64, 191, 255)',
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgb(255, 255, 255)',
    textAlign: 'center',
  },
});