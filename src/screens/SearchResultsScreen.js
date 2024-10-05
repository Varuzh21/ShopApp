import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchProductRequest } from '../store/actions/products';
import Icon from 'react-native-vector-icons/Feather';
import SearchBar from '../components/SearchBar';
import ProductsCart from '../components/ProductsCart';

const SearchResultsScreen = () => {
    const route = useRoute();
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { searchQuery } = route.params;

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        dispatch(getSearchProductRequest(searchQuery));
        setIsLoading(false);
    }, [searchQuery]);

    const searchResults = useSelector((state) => state.getSearchProductReducer.searchResult);

    const handleSearch = (query) => {
        dispatch(getSearchProductRequest(query));
    };


    return (
        <View style={styles.container}>
            <View style={styles.inputGroup}>
                <View style={styles.searchBarContainer}>
                    <SearchBar
                        placeHolder="Search Product"
                        handleSearch={handleSearch}
                    />
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Favorite Product')}>
                        <Icon name="menu" size={25} color="rgb(144, 152, 177)" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                        <Icon name="filter" size={25} color="rgb(144, 152, 177)" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {searchResults?.total || 0} Result{searchResults?.total !== 1 ? 's' : ''}
                </Text>
                <TouchableOpacity>
                    <Text style={styles.text}>
                        {searchResults?.products?.[0]?.category || 'Category'}
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={searchResults?.products || []}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ProductsCart product={item} />}
                contentContainerStyle={styles.productList}
                showsVerticalScrollIndicator={false}
            />
        </View>
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
    productList: {
        paddingTop: 18,
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