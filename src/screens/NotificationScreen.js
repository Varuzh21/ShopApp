import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from'react-native-vector-icons/AntDesign';

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
       <TouchableOpacity style={styles.button}>
           <Icon name="tago" size={24} color="rgb(64, 191, 255)" />
           <Text style={styles.text}>Offer</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.button}>
           <Icon name="profile" size={24} color="rgb(64, 191, 255)" />
           <Text style={styles.text}>Feed</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.button}>
           <Icon name="bells" size={24} color="rgb(64, 191, 255)" />
           <Text style={styles.text}>Acidity</Text>
       </TouchableOpacity>
    </View>
  )
}

export default NotificationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        gap: 20
    },
    button: {
       width: '100%',
       flexDirection: 'row',
       alignItems: 'center',
    },
    text: {
        color: 'rgb(34, 50, 99)',
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 12,
        textAlign: 'left',
        paddingLeft: 19
    }
})