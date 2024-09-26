import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const ReconProduct = () => {
  return (
    <ImageBackground
      source={require("../assets/icons/image2.png")}
      style={styles.imageBackground}
      imageStyle={{ borderRadius: 5 }}
    >
      <View style={styles.textContainer}>
        <Text style={styles.title}>Recommended Product</Text>
        <Text style={styles.down}>We recommend the best for you</Text>
      </View>
    </ImageBackground>
  )
}

export default ReconProduct

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: "auto",
    height: 206,
  },
  textContainer: {
    paddingTop: 48,
    paddingLeft: 24,
    gap: 16,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: '700',
    color: 'rgb(255, 255, 255)',
    textAlign: 'left',
  },
  down: {
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '400',
    color: 'rgb(255, 255, 255)',
    textAlign: 'left',
  }
})