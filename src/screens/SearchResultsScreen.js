import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchProductRequest, getProductsByCategoryRequest } from '../store/actions/products';
import Icon from 'react-native-vector-icons/Feather';
import SearchBar from '../components/SearchBar';
import ProductsCart from '../components/ProductsCart';

const SearchResultsScreen = () => {
    const route = useRoute();
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { searchQuery, name } = route.params;

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const searchResults = useSelector((state) => state.getSearchProductReducer.searchResult);
    const categoryProducts = useSelector((state) => state.getProductsByCategoryReducer.categoryByName);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                Promise.all(
                    dispatch(getSearchProductRequest(searchQuery)),
                    dispatch(getProductsByCategoryRequest(name))
                )
                setIsLoading(false);
            } catch (err) {
                setError('Failed to load data. Please try again.');
                setIsLoading(false);
            }
        };

        fetchData();
    }, [searchQuery, name]);

    const handleSearch = (query) => {
        setError(null);
        dispatch(getSearchProductRequest(query));
    };

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="rgb(64, 191, 255)" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <View style={styles.searchBarContainer}>
                    <SearchBar
                        placeHolder={searchQuery ? searchQuery : 'Search'}
                        handleSearch={handleSearch}
                    />
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Favorite Product')}>
                        <Icon name="menu" size={25} color="rgb(144, 152, 177)" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
                        <Icon name="filter" size={25} color="rgb(144, 152, 177)" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {searchResults?.total || categoryProducts?.total} Result{(searchResults?.total || categoryProducts?.total) !== 1 ? 's' : ''}
                </Text>
                <TouchableOpacity>
                    <Text style={styles.text}>
                        {searchResults?.products?.[0]?.category || categoryProducts?.products?.[0]?.category || ''}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{ paddingTop: 18 }}>
                {searchResults?.products?.length > 0 && (
                    <ProductsCart products={searchResults.products} handleNavigation={(id) => navigation.navigate('Product Detail', { productId: id })} />
                )}

                {categoryProducts?.products?.length > 0 && (
                    <ProductsCart products={categoryProducts.products} handleNavigation={(id) => navigation.navigate('Product Detail', { productId: id })} />
                )}
            </View>
        </ScrollView>
    );
};

export default SearchResultsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    inputGroup: {
        width: '100%',
        paddingTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchBarContainer: {
        width: '75%',
    },
    iconContainer: {
        width: '20%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 32,
    },
    text: {
        color: 'rgb(34, 50, 99)',
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 12,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
    },
});