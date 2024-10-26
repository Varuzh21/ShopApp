import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import ProductsCart from '../components/ProductsCart';

const ResultScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { filteredProducts } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Filtered Products</Text>
            {filteredProducts.length > 0 ? (
                <ProductsCart products={filteredProducts} handleNavigation={(id) => navigation.navigate('Product Detail', { productId: id })} />
            ) : (
                <Text>No products found based on the selected filters.</Text>
            )}
        </View>
    );
};

export default ResultScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    header: {
        color: "rgb(34, 50, 99)",
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 16
    },
    productItem: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginBottom: 10
    },
    productName: {
        fontSize: 16,
        fontWeight: '600'
    }
});
