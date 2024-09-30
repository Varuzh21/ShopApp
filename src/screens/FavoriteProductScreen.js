import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsRequest } from '../store/actions/products';
import ProductsCart from '../components/ProductsCart';

const FavoriteProductScreen = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsRequest())
  }, [dispatch])

  const products = useSelector((state) => state.getProductsReducer.products);

  return (
    <View style={styles.container}>
      <ProductsCart products={products.products}/>
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