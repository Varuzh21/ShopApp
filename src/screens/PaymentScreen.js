import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'

const PaymentScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Choose Card')}>
                <Icon name='credit-card' size={25} color="rgb(64, 191, 255)" />
                <Text style={styles.text}>Credit Card Or Debit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Icon name='paypal' size={25} color="rgb(64, 191, 255)" />
                <Text style={styles.text}>Paypal</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Icon name='bank' size={25} color="rgb(64, 191, 255)" />
                <Text style={styles.text}>Bank Transfer</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PaymentScreen

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
        fontSize: 11,
        textAlign: 'left',
        paddingLeft: 19
    }
})