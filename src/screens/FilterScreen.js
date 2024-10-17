import { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import Slider from '@react-native-community/slider';

const FilterScreen = () => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.label}>Price Range</Text>
            <View style={styles.priceInputs}>
                <TextInput
                    style={styles.priceInput}
                    keyboardType="numeric"
                    value={minPrice.toString()}
                    onChangeText={(value) => setMinPrice(Number(value))}
                />
                <TextInput
                    style={styles.priceInput}
                    keyboardType="numeric"
                    value={maxPrice.toString()}
                    onChangeText={(value) => setMaxPrice(Number(value))}
                />
            </View>

            <View></View>
            <Slider
                style={{ width: '100%', height: 40 }}
                minimumValue={0}
                maximumValue={10000}
                debugTouchArea={true}
                step={100}
                value={minPrice}
                onValueChange={(value) => setMinPrice(value)}
                minimumTrackTintColor="#00aaff"
                maximumTrackTintColor="#d3d3d3"
            />
            <Slider
                style={{ width: '100%', height: 40 }}
                minimumValue={0}
                maximumValue={10000}
                debugTouchArea={true}
                step={100}
                value={maxPrice}
                onValueChange={(value) => setMaxPrice(value)}
                minimumTrackTintColor="#00aaff"
                maximumTrackTintColor="#d3d3d3"
            />
        </ScrollView>
    )
}

export default FilterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    sliderContainer: {
        padding: 20,
    },
    label: {
        color: 'rgb(34, 50, 99)',
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '700',
    },
    priceInputs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    priceInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 8,
        width: '45%',
        borderRadius: 5,
    },
})