import { useState, useCallback } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchProductRequest } from '../store/actions/products';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import SearchBar from '../components/SearchBar';

const ExploreScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const handleSearch = useCallback((e) => {
    const searchQuery = e.nativeEvent.text;
    setSearchText(searchQuery);
    if (searchQuery) {
      dispatch(getSearchProductRequest(searchQuery));
    }
  }, []);

  const searchResults = useSelector((state) => state.getSearchProductReducer.searchResult);

  const products = searchResults?.products ?? [];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <View style={styles.searchBarContainer}>
          <SearchBar
            placeHolder="Search Product"
            handleSearch={handleSearch}
          />
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Favorite Product')}>
            <Icon name="heart" size={25} color="rgb(144, 152, 177)" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Icon name="bell" size={25} color="rgb(144, 152, 177)" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.productList}>
        {products.length > 0 ? (
          <>
            {products.map((product, index) => (
              <TouchableOpacity key={index} style={styles.productItem} onPress={() => navigation.navigate('SearchResults', {searchQuery: product.title})}>
                <Text style={styles.productName}>{product.title}</Text>
              </TouchableOpacity>
            ))}
          </>
        ) : (
          <Text style={styles.noResultText}>No products found</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
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
  productList: {
    marginTop: 20,
  },
  resultText: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '700',
    color: 'rgb(34, 50, 99)',
  },
  productItem: {
    paddingVertical: 10,
  },
  productName: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: 'rgb(34, 50, 99)',
  },
  noResultText: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: 'rgb(144, 152, 177)',
    textAlign: 'center',
    marginTop: 20,
  },
});