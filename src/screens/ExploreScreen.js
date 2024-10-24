import { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchProductRequest, getCategoriesRequest } from '../store/actions/products';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';

const ExploreScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    dispatch(getCategoriesRequest())
  }, [])

  const iconMap = {
    beauty: 'face',
    fragrances: 'local-florist',
    furniture: 'chair',
    groceries: 'local-grocery-store',
    laptops: 'laptop',
    motorcycle: 'two-wheeler',
    smartphones: 'smartphone',
    sunglasses: 'remove-red-eye',
    tablets: 'tablet',
    tops: 'style',
    vehicle: 'commute',
  };

  const getIconName = (slug) => iconMap[slug] || 'category';

  const handleSearch = useCallback((e) => {
    const searchQuery = e.nativeEvent.text;
    setSearchText(searchQuery);
    if (searchQuery) {
      dispatch(getSearchProductRequest(searchQuery));
    }
  }, []);

  const categories = useSelector((state) => state.getCategoriesReducer.category);
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
        {products.length > 0 && searchText ? (
          <>
            {products.map((product, index) => (
              <TouchableOpacity key={index} style={styles.productItem} onPress={() => navigation.navigate('Product Detail', { productId: product.id })}>
                <Text style={styles.productName}>{product.title}</Text>
              </TouchableOpacity>
            ))}
            <View style={{ paddingTop: 15, paddingBottom: 15 }}>
              <Button title="See More" onClickButton={() => navigation.navigate('SearchResults', { searchQuery: searchText })} />
            </View>
          </>
        ) : (
          <>
            <Text style={styles.title}>Categories</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {categories.map((item, index) => (
                <TouchableOpacity key={index} style={styles.categoryItem} onPress={() => navigation.navigate("SearchResults", {name: item.name.toLowerCase()})}>
                  <View style={styles.iconContainer2}>
                    <Icon2 name={getIconName(item.slug)} size={40} color="rgb(64, 191, 255)" />
                  </View>
                  <Text style={styles.itemText}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
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
  title: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '700',
    color: 'rgb(34, 50, 99)',
    marginBottom: 20,
  },
  iconContainer2: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: 'rgb(235, 240, 255)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText: {
    textAlign: 'center',
    fontSize: 12,
    color: 'rgb(34, 50, 99)',
  },
  categoryItem: {
    width: "25%",
    marginBottom: '3%',
    alignItems: 'center',
  },
});