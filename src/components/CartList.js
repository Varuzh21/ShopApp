import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const CartList = (products) => {
  return (
    <View style={styles.cart}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ width: "22%", backgroundColor: '#F5F5F5', borderRadius: 5, paddingRight: 12 }}>
          <Image source={{ uri: products.products.thumbnail }} width={72} height={72} />
        </View>

        <View style={{ width: "75%", flexDirection: 'column', gap: 12 }}>

          <View style={{ flexDirection: 'row', gap: 5, justifyContent: 'space-between' }}>
            <Text style={styles.productTitle}>{products.products.title}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', gap: 2}}>
              <TouchableOpacity>
                <Icon name="heart" size={20} color="rgb(144, 152, 177)" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="trash-2" size={20} color="rgb(144, 152, 177)" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={styles.productPrice}>${products.products.price}</Text>

            <View style={styles.btn}>
              <TouchableOpacity style={{ paddingHorizontal: 8, paddingVertical: 4 }}>
                <Icon name="minus" size={20} color="rgb(144, 152, 177)" />
              </TouchableOpacity>
                <Text style={styles.productQuantity}>{products.products.quantity}</Text>
              <TouchableOpacity style={{ paddingHorizontal: 8, paddingVertical: 4 }}>
                <Icon name="plus" size={20} color="rgb(144, 152, 177)" />
              </TouchableOpacity>
            </View>

          </View>
        </View>

      </View>
    </View>
  )
}

export default CartList

const styles = StyleSheet.create({
  cart: {
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgb(235, 240, 255)',
    padding: 16,
    marginBottom: 16,
  },
  productTitle: {
    color: 'rgb(34, 50, 99)',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center'
  },
  productPrice: {
    color: 'rgb(34, 50, 99)',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'left'
  },
  productQuantity: {
    color: 'rgb(34, 50, 99)',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
  },
  btn: {
    width: 106,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgb(235, 240, 255)',
  }
})