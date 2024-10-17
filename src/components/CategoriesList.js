import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native'; 
import { getCategoriesRequest } from '../store/actions/products';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';

const CategoriesList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getCategoriesRequest());
  }, []);

  const categories = useSelector((state) => state.getCategoriesReducer.category);

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

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.carouselItem} onPress={() => navigation.navigate('Search Results', {name: item.name.toLowerCase()})}>
      <View style={styles.iconContainer}>
        <Icon name={getIconName(item.slug)} size={40} color="rgb(64, 191, 255)" />
      </View>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      horizontal
      keyExtractor={(item) => item.slug}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.carousel}
    />
  );
};

export default CategoriesList;

const styles = StyleSheet.create({
  carouselItem: {
    alignItems: 'center',
    marginHorizontal: 12,
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 66,
    borderWidth: 1,
    borderColor: 'rgb(235, 240, 255)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 12,
    color: 'rgb(144, 152, 177)',
    textAlign: 'center',
  },
});