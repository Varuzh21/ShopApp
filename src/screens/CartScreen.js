import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCart } from '../store/actions/cart';
import { useNavigation } from '@react-navigation/native';
import CartList from '../components/CartList';
import Button from '../components/Button';

const CartScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getAllCart());
  }, []);

  const cartSelector = useSelector(state => state.getAllCartReducer.cart);

  const total = cartSelector[0]?.total || 0;
  const discountedTotal = cartSelector[0]?.discountedTotal || 0;
  const totalProducts = cartSelector[0]?.totalProducts || 0;
  const totalQuantity = cartSelector[0]?.totalQuantity || 0;

  return (
    <ScrollView style={styles.container}>
      {cartSelector[0]?.products.map((item) => (
        <View key={item.id} style={{ paddingTop: 16 }}>
          <CartList products={item} />
        </View>
      ))}
      <View style={{ paddingTop: 32 }}>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            placeholder='Enter Coupon Code'
            placeholderTextColor="rgb(144, 152, 177)"
            style={styles.input}
          />
          <Button title='Apply' customStyle={styles.btn} />
        </View>
      </View>

      <View style={styles.summaryContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Items ({totalProducts})</Text>
          <Text style={styles.value}>${total.toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Total Quantity</Text>
          <Text style={styles.value}>{totalQuantity}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Discounted Total</Text>
          <Text style={styles.value}>${discountedTotal.toFixed(2)}</Text>
        </View>
        <View style={styles.rowTotal}>
          <Text style={styles.totalLabel}>Total Price</Text>
          <Text style={styles.totalValue}>${discountedTotal.toFixed(2)}</Text>
        </View>
      </View>

      <View style={{ paddingBottom: 16 }}>
        <Button title='Check Out' onClickButton={() => navigation.navigate('Ship To')} />
      </View>
    </ScrollView>
  );
}

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  input: {
    width: "75%",
    borderWidth: 1,
    borderColor: 'rgb(235, 240, 255)',
    paddingLeft: 16,
    borderTopLeftRadius: 5,
    // borderBottomRightRadius: 5,
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "400",
    color: "rgb(144, 152, 177)",
    textAlign: "left",
  },
  btn: {
    width: '25%',
    backgroundColor: 'rgb(64, 191, 255)',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    paddingVertical: 17,
    paddingHorizontal: 24
  },
  summaryContainer: {
    paddingTop: 16,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
    marginVertical: 20,
    borderColor: '#ebf0ff',
    borderWidth: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8
  },
  rowTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgb(235, 240, 255)',
    paddingTop: 16
  },
  label: {
    color: 'rgb(144, 152, 177)',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '400'
  },
  value: {
    color: 'rgb(44, 50, 89)',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '400'
  },
  totalLabel: {
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '700',
    color: 'rgb(44, 50, 89)'
  },
  totalValue: {
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '700',
    color: 'rgb(64, 191, 255)'
  },
});