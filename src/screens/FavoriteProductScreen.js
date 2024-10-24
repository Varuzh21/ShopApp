import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsRequest } from '../store/actions/products';
import { useNavigation } from '@react-navigation/native';
import ProductsCart from '../components/ProductsCart';

const FavoriteProductScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  useEffect(() => {
    dispatch(getProductsRequest())
  }, [])

  const products = useSelector((state) => state.getProductsReducer.products);

  return (
    <View style={styles.container}>
      <ProductsCart products={products} handleNavigation={(id) => navigation.navigate('Product Detail', { productId: id })}/>
    </View>
  )
}

export default FavoriteProductScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 16
  }
})