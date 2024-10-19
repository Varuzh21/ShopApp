import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Input from '../components/Input';

const FilterScreen = () => {
    const [sliderValues, setSliderValues] = useState([0, 10000]);

    const handleSliderChange = (values) => {
        setSliderValues(values);
    };

    const handleMinPriceChange = (value) => {
        const numericValue = parseInt(value, 10);
        if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= sliderValues[1]) {
            setSliderValues([numericValue, sliderValues[1]]);
        }
    };

    const handleMaxPriceChange = (value) => {
        const numericValue = parseInt(value, 10);
        if (!isNaN(numericValue) && numericValue >= sliderValues[0] && numericValue <= 10000) {
            setSliderValues([sliderValues[0], numericValue]);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.label}>Price Range</Text>

            <View style={styles.priceDisplay}>
                <View style={{ width: "45%" }}>
                    <Input
                        // type='numeric'
                        value={sliderValues[0].toString()}
                        onChangeText={handleMinPriceChange}
                    />
                </View>

                <View style={{ width: "45%" }}>
                    <Input
                        // type='numeric'
                        value={sliderValues[1].toString()}
                        onChangeText={handleMaxPriceChange}
                    />
                </View>
            </View>

            <View style={{width: '100%' ,flexDirection: 'row', justifyContent: 'center'}}>
                <MultiSlider
                    values={sliderValues}
                    onValuesChange={handleSliderChange}
                    min={0}
                    max={10000}
                    step={100}
                    snapped
                    allowOverlap={false}
                    containerStyle={styles.sliderContainer}
                    selectedStyle={styles.selectedTrack}
                    unselectedStyle={styles.unselectedTrack}
                    trackStyle={styles.track}
                    sliderLength={345}
                    markerStyle={styles.marker}
                    pressedMarkerStyle={styles.pressedMarker}
                />
            </View>

            <View style={{width: '100%' ,flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.text}>MIN</Text>
                <Text style={styles.text}>MAX</Text>
            </View>
        </ScrollView>
    );
};

export default FilterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },
    label: {
        color: "rgb(34, 50, 99)",
        fontSize: 14,
        fontWeight: '700',
        paddingTop: 16,
        marginBottom: 10,
    },
    priceDisplay: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    priceText: {
        fontSize: 16,
        fontWeight: '700',
    },
    track: {
        height: 4,
        borderRadius: 5,
    },
    selectedTrack: {
        backgroundColor: 'rgb(64, 191, 255)',
    },
    unselectedTrack: {
        backgroundColor: 'rgb(235, 240, 255)',
    },
    marker: {
        backgroundColor: 'rgb(64, 191, 255)',
        height: 20,
        width: 20,
        borderRadius: 10,
    },
    pressedMarker: {
        backgroundColor: 'rgb(64, 191, 255)',
    },
    sliderContainer: {
        width: '100%',
    },
    text: {
        color: 'rgb(144,152,177)',
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '700',
    }
});