import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Input from '../components/Input'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.InputGroup}>
          {/* <Input placeholder="Search Product"/> */}
          <Text style={{color: '#000'}}>Search bar</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  InputGroup: {
    paddingTop: 16
  }
})