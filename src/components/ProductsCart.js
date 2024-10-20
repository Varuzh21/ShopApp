import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import StarRating from './StarRating';

const ProductsCart = ({ products = [],  handleNavigation}) => {
    if (!products || products.length === 0) {
        return <Text>No products available.</Text>;
    }

    return (
        <ScrollView contentContainerStyle={styles.carousel} showsHorizontalScrollIndicator={false}>
            <View style={styles.productGrid}>
                {products.map((item) => {
                    const discountedPrice = item.price - (item.price * item.discountPercentage / 100);

                    return (
                        <View key={item.id.toString()} style={styles.productContainer}>
                            <TouchableOpacity style={styles.cart} onPress={() => handleNavigation(item.id)}>
                                <View style={styles.iconContainer}>
                                    <Image source={{ uri: item.thumbnail }} style={styles.image} />
                                </View>
                                <Text style={styles.itemText}>{item.title}</Text>
                                <View style={{ justifyContent: "flex-start" }}>
                                    <StarRating defaultRating={item.rating} maxRating={5} />
                                </View>
                                <Text style={styles.discountedPrice}>${discountedPrice.toFixed(2)}</Text>
                                <View style={styles.priceContainer}>
                                    <Text style={styles.originalPrice}>${item.price.toFixed(2)}</Text>
                                    <Text style={styles.discountPercentage}>{item.discountPercentage}% Off</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    productGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    productContainer: {
        marginBottom: 10,
    },
    cart: {
        width: 167,
        height: 282,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "rgb(235, 240, 255)",
        padding: 16,
        backgroundColor: '#fff',
    },
    iconContainer: {
        width: '100%',
        height: 120,
        marginBottom: 8,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 5,
    },
    itemText: {
        fontFamily: "Poppins",
        fontWeight: '700',
        fontSize: 14,
        color: "rgb(34, 50, 99)",
        marginBottom: 8,
        textAlign: 'left',
    },
    discountedPrice: {
        fontFamily: "Poppins",
        fontWeight: '700',
        fontSize: 12,
        color: "rgb(64, 191, 255)",
        textAlign: 'left',
        paddingTop: 16,
    },
    originalPrice: {
        fontFamily: "Poppins",
        fontWeight: "400",
        textDecorationLine: 'line-through',
        color: 'rgb(144, 152, 177)',
        fontSize: 10,
        textAlign: 'center',
        marginTop: 4,
    },
    discountPercentage: {
        fontFamily: "Poppins",
        fontWeight: '700',
        fontSize: 10,
        color: "rgb(251, 113, 129)",
        marginTop: 4,
        textAlign: 'right',
    },
    priceContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        gap: 8,
    },
    carousel: {
        width: '100%',
    },
});

export default ProductsCart;