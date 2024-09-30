import { View, Text, StyleSheet } from 'react-native'
import FlashSaleBanner from '../components/FlashSaleBanner';
import ReconProduct from '../components/ReconProduct';

const OfferScreen = () => {
  return (
    <View style={styles.container}>
       <View style={styles.textContainer}>
          <Text style={styles.text}>Use “MEGSL” Cupon For Get 90%off</Text>
       </View>
       <FlashSaleBanner />
       <ReconProduct />
    </View>
  )
}

export default OfferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    gap: 40
  },
  textContainer: {
    width: '100%',
    height: 80,
    backgroundColor: 'rgb(64, 191, 255)',
    borderRadius: 5,
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
    paddingHorizontal: 16,
    paddingVertical: 20,
  }
})