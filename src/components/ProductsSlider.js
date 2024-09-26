import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ProductsSlider = ({ products, horizontal = true }) => {

    const renderItem = ({ item }) => {
        const discountedPrice = item.price - (item.price * item.discountPercentage / 100);

        return (
            <TouchableOpacity style={styles.cart}>
                <View style={styles.iconContainer}>
                    <Image source={{ uri: item.thumbnail }} style={styles.image} />
                </View>
                <Text style={styles.itemText} numberOfLines={2}>{item.title}</Text>

                <Text style={styles.discountedPrice}>${discountedPrice.toFixed(2)}</Text>

                <View style={styles.priceContainer}>
                    <Text style={styles.originalPrice}>${item.price.toFixed(2)}</Text>
                    <Text style={styles.discountPercentage}>{item.discountPercentage}% Off</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
        data={products}
        renderItem={renderItem}
        horizontal={horizontal}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carousel}
    />
    )
}

export default ProductsSlider

const styles = StyleSheet.create({
    cart: {
        width: 160,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "rgb(235, 240, 255)",
        padding: 16,
        // alignItems: 'center',
        marginHorizontal: 10,
        backgroundColor: '#fff',
    },
    iconContainer: {
        width: '100%',
        height: 120,
        marginBottom: 8,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
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
    priceContainer:{
        flexDirection: 'row',
        alignContent: 'center',
        gap: 8
    }
})