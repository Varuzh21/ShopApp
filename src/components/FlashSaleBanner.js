import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function FlashSaleBanner() {
  const [hours, setHours] = useState(8);
  const [minutes, setMinutes] = useState(34);
  const [seconds, setSeconds] = useState(52);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => (prev === 0 ? 59 : prev - 1));
      if (seconds === 0) {
        setMinutes(prev => (prev === 0 ? 59 : prev - 1));
        if (minutes === 0) {
          setHours(prev => (prev === 0 ? 23 : prev - 1));
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  return (
      <ImageBackground
        source={require('../assets/icons/image.png')}
        style={styles.imageBackground}
        imageStyle={{ borderRadius: 10 }}
      >
        <View style={styles.textContainer}>
          <Text style={styles.saleText}>Super Flash Sale</Text>
          <Text style={styles.saleText}>50% Off</Text>
        </View>

        <View style={styles.timerContainer}>
          <View style={styles.timerBlock}>
            <Text style={styles.timerText}>{hours.toString().padStart(2, '0')}</Text>
          </View>
          <Text style={styles.colon}>:</Text>
          <View style={styles.timerBlock}>
            <Text style={styles.timerText}>{minutes.toString().padStart(2, '0')}</Text>
          </View>
          <Text style={styles.colon}>:</Text>
          <View style={styles.timerBlock}>
            <Text style={styles.timerText}>{seconds.toString().padStart(2, '0')}</Text>
          </View>
        </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: 220,
  },
  textContainer: {
    position: 'absolute',
    top: 32,
    left: 24,
  },
  saleText: {
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  timerContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 40,
    left: 24,
  },
  timerBlock: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  timerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  colon: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginHorizontal: 8,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
});