import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Feather';

export default function AccountScreen() {
  const { logout } = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
        <Icon name='user' size={25} color="rgb(64, 191, 255)" />
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Icon name='shopping-bag' size={25} color="rgb(64, 191, 255)" />
        <Text style={styles.text}>Order</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Icon name='map-pin' size={25} color="rgb(64, 191, 255)" />
        <Text style={styles.text}>Address</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Icon name='credit-card' size={25} color="rgb(64, 191, 255)" />
        <Text style={styles.text}>Payment</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => { logout() }}>
        <Icon name='log-out' size={25} color="rgb(64, 191, 255)" />
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  text: {
    color: 'rgb(34, 50, 99)',
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 12,
    textAlign: 'left',
    paddingLeft: 19
  }
});
