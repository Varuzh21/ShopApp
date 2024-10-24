import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

const ProductItem = ({ name, price, imageUrl, isFavorite }) => {
    return (
        <View style={styles.productItem}>
            <View style={styles.ImageContainer}>
                <Image source={{ uri: imageUrl }} style={styles.productImage} />
            </View>
            <View style={styles.productDetails}>
                <Text style={styles.productName}>{name}</Text>
                <Text style={styles.productPrice}>${price}</Text>
            </View>
            <TouchableOpacity>
                <Icon name="heart" size={24} color={isFavorite? 'red' : 'grey'} />
            </TouchableOpacity>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    productItem: {
        width: "100%",
        height: 104,
        flexDirection: 'row',
        marginBottom: 12,
        padding: 16,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: "rgb(235, 240, 255)",
        borderRadius: 8,
    },
    productImage: {
        width: "100%",
        height: 60,
        justifyContent: 'center',
    },
    productDetails: {
        flex: 1,
    },
    productName: {
        color:"rgb(34, 50, 99)",
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '700',
        paddingBottom: 35,
    },
    productPrice: {
        color: "rgb(64, 191, 255)",
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '700',
    },
    ImageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: "25%",
        height: 72,
        backgroundColor: "#F5F5F5",
        borderRadius: 5,
        marginRight: 12
    }
})