import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react'
import Button from '../components/Button'

const ChooseCardScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.creditCart}>
                <Icon name="cc-mastercard" size={22} />
                <Text style={styles.text}>6326    9124    8124    9875</Text>
                <View style={styles.flex}>
                    <Text style={styles.text2}>CARD HOLDER</Text>
                    <Text style={styles.text2}>CARD SAVE</Text>
                </View>
                <View style={styles.flex}>
                    <Text style={styles.text3}>Dominic Ovo</Text>
                    <Text style={styles.text3}>19/2042</Text>
                </View>
            </View>

            <View style={{paddingTop: 377}}>
                <Button title="Pay" />
            </View>
        </View>
    )
}

export default ChooseCardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10
    },
    creditCart: {
        width: '100%',
        height: 190,
        backgroundColor: 'rgb(64, 191, 255)',
        borderRadius: 5,
        marginTop: 16,
        paddingHorizontal: 21,
        paddingVertical: 24,

    },
    text: {
        color: 'rgb(255,255,255)',
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight: '700',
        paddingTop: 31
    },
    flex: {
        flexDirection: 'row',
        marginTop: 15,
        gap: 32
    },
    text2: {
        color: 'rgb(255,255,255)',
        fontFamily: 'Poppins',
        fontSize: 10,
        fontWeight: '400',
    },
    text3: {
        color: 'rgb(255,255,255)',
        fontFamily: 'Poppins',
        fontSize: 10,
        fontWeight: '700',
    }
})