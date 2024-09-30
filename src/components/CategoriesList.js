import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoriesRequest } from '../store/actions/products';
import _ from 'lodash';

const CategoriesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesRequest());
  }, []);

  const categories = useSelector((state) => state.getCategoriesReducer.category);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.carouselItem}>
      <View style={styles.iconContainer}>
      </View>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      horizontal
      keyExtractor={() => _.uniqueId().toString()}
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