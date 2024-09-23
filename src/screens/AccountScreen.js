import React, {useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import { AuthContext } from '../context/AuthContext';

export default function AccountScreen() {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.accountTitle}>
        <Text style={styles.title}>Account</Text>
      </View>
      <View>
        <Button
          title="Logout"
          textStyle={styles.text}
          onClickButton={() => {logout()}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  accountTitle: {
    paddingVertical: 28,
    borderBottomColor: 'rgb(235, 240, 255)',
    borderBottomWidth: 1,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgb(34, 50, 99)',
    textAlign: 'left',
  },
  button: {
    // Add your button styles here
  },
  text: {
    // Add your text styles here
  },
});
