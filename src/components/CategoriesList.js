import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoriesRequest } from '../store/actions/products';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CategoriesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesRequest());
  }, [dispatch]);

  const categories = useSelector((state) => state.getCategoriesReducer.category);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.carouselItem}>
      <View style={styles.iconContainer}>
        <Icon name={getIconName(item.name)} size={40} color="#00ADEF" />
      </View>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const getIconName = (category) => {
    switch (category) {
      case 'Beauty':
        return 'lipstick';
      case 'Fragrances':
        return 'spray';
      case 'Furniture':
        return 'sofa';
      case 'Groceries':
        return 'shopping';
      case 'Home Decoration':
        return 'home-heart';
      case 'Kitchen Accessories':
        return 'silverware-fork-knife';
      case 'Laptops':
        return 'laptop';
      case 'Mens Watches':
        return 'watch';
      case 'Mobile Accessories':
        return 'cellphone-cog';
      case 'Motorcycle':
        return 'motorbike';
      case 'Skin Care':
        return 'face-woman-shimmer';
      case 'Smartphones':
        return 'cellphone';
      case 'Sports Accessories':
        return 'basketball';
      case 'Sunglasses':
        return 'sunglasses';
      case 'Tablets':
        return 'tablet';
      case 'Tops':
        return 'tshirt-v';
      case 'Vehicle':
        return 'car';
      case 'Womens Bags':
        return 'bag-personal';
      case 'Womens Dresses':
        return 'dress';
      case 'Womens Jewellery':
        return 'ring';
      case 'Womens Shoes':
        return 'shoe-heel';
      case 'Womens Watches':
        return 'watch-variant';
      default:
        return 'tag';
    }
  };

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      horizontal
      keyExtractor={(index) => index.toString()}
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