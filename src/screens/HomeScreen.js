import React from 'react';
import { View, TouchableOpacity ,StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import Icon from 'react-native-vector-icons/Feather';
import Slider from '../components/Carousel';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.InputGroup}>
          <View style={{width: "75%"}}>
              <SearchBar placeHolder="Search Product" />
          </View>
          <View style={{width: "20%", flexDirection: "row", justifyContent: "space-around"}}>
              <TouchableOpacity>
                  <Icon name="heart" size={18} color="rgb(144, 152, 177)" />
              </TouchableOpacity>
              <TouchableOpacity>
                  <Icon name="bell" size={18} color="rgb(144, 152, 177)" />
              </TouchableOpacity>
          </View> 
      </View>

      <View>
          <Slider/>
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
    width: '100%',
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  }
})