import { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesRequest } from '../store/actions/products';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';

const ListCategoryScreen = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategoriesRequest())
  }, [])

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

  return (
    <ScrollView style={styles.container}>
        {categories.map((category) => (
          <TouchableOpacity key={category.slug} style={styles.button}>
            <Icon name={getIconName(category.slug)} size={25} color="rgb(64, 191, 255)" />
            <Text style={styles.text}>{category.name}</Text>
          </TouchableOpacity>
        ))}
    </ScrollView>
  )
}

export default ListCategoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  text: {
    color: 'rgb(34, 50, 99)',
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 11,
    textAlign: 'left',
    paddingLeft: 19
  }
})