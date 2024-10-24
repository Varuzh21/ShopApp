import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsRequest } from '../store/actions/products'
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Input from '../components/Input';
import Button from '../components/Button';

const FilterScreen = () => {
    const [sliderValues, setSliderValues] = useState([0, 10000]);
    const [selectedCondition, setSelectedCondition] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [showOnly, setShowOnly] = useState([]);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsRequest())
    }, [])

    const products = useSelector((state) => state.getProductsReducer.products) || [];

    const handleSliderChange = (values) => {
        setSliderValues(values);
    };

    const handleMinPriceChange = (value) => {
        const numericValue = parseInt(value);
        if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= sliderValues[1]) {
            setSliderValues([numericValue, sliderValues[1]]);
        }
    };

    const handleMaxPriceChange = (value) => {
        const numericValue = parseInt(value);
        if (!isNaN(numericValue) && numericValue >= sliderValues[0] && numericValue <= 10000) {
            setSliderValues([sliderValues[0], numericValue]);
        }
    };

    const toggleCondition = (condition) => {
        setSelectedCondition(condition === selectedCondition ? null : condition);
    };

    const toggleLocation = (location) => {
        setSelectedLocation(location === selectedLocation ? null : location);
    };

    const toggleShowOnly = (option) => {
        setShowOnly((prev) => {
            if (prev.includes(option)) {
                return prev.filter(item => item !== option);
            } else {
                return [...prev, option];
            }
        });
    };

    const handleApply = () => {
        const filteredProducts = products.filter((product) => {
            const meetsPrice = product.price >= sliderValues[0] && product.price <= sliderValues[1];
            const meetsCondition = selectedCondition ? product.condition === selectedCondition : true;
            const meetsLocation = selectedLocation ? product.location === selectedLocation : true;
            return meetsPrice && meetsCondition && meetsLocation;
        });

        navigation.navigate('Results', { filteredProducts });
    };

    return (
        <ScrollView style={styles.container}>
            <View style={{ paddingTop: 16 }}>
                <View style={{ paddingTop: 16, marginBottom: 10 }}>
                    <Text style={styles.label}>Price Range</Text>
                </View>

                <View style={styles.priceDisplay}>
                    <View style={{ width: "45%" }}>
                        <Input
                            value={sliderValues[0].toString()}
                            onChangeText={handleMinPriceChange}
                        />
                    </View>

                    <View style={{ width: "45%" }}>
                        <Input
                            value={sliderValues[1].toString()}
                            onChangeText={handleMaxPriceChange}
                        />
                    </View>
                </View>

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
                    sliderLength={340}
                    markerStyle={styles.marker}
                />
            </View>

            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.text}>MIN</Text>
                <Text style={styles.text}>MAX</Text>
            </View>


            <View style={styles.section}>
                <View style={{ paddingBottom: 12 }}>
                    <Text style={styles.label}>Condition</Text>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={[styles.filterButton, selectedCondition === 'New' && styles.selected]}
                        onPress={() => toggleCondition('New')}
                    >
                        <Text style={selectedCondition === 'New' ? styles.selectedText : styles.text}>New</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.filterButton, selectedCondition === 'Used' && styles.selected]}
                        onPress={() => toggleCondition('Used')}
                    >
                        <Text style={selectedCondition === 'Used' ? styles.selectedText : styles.text}>Used</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.filterButton, selectedCondition === 'Not Specified' && styles.selected]}
                        onPress={() => toggleCondition('Not Specified')}
                    >
                        <Text style={selectedCondition === 'Not Specified' ? styles.selectedText : styles.text}>Not Specified</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.section}>
                <View style={{ paddingBottom: 12 }}>
                    <Text style={styles.label}>Item Location</Text>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={[styles.filterButton, selectedLocation === 'North America' && styles.selected]}
                        onPress={() => toggleLocation('North America')}
                    >
                        <Text style={selectedLocation === 'North America' ? styles.selectedText : styles.text}>North America</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.filterButton, selectedLocation === 'Europe' && styles.selected]}
                        onPress={() => toggleLocation('Europe')}
                    >
                        <Text style={selectedLocation === 'Europe' ? styles.selectedText : styles.text}>Europe</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.section}>
                <View style={{ paddingBottom: 12 }}>
                    <Text style={styles.label}>Show Only</Text>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={[styles.filterButton, showOnly.includes('Sold Items') && styles.selected]}
                        onPress={() => toggleShowOnly('Sold Items')}
                    >
                        <Text style={showOnly.includes('Sold Items') ? styles.selectedText : styles.text}>Sold Items</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.filterButton, showOnly.includes('Returns Accepted') && styles.selected]}
                        onPress={() => toggleShowOnly('Returns Accepted')}
                    >
                        <Text style={showOnly.includes('Returns Accepted') ? styles.selectedText : styles.text}>Returns Accepted</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 22 }}>
                <Button
                    title="Apply"
                    onClickButton={handleApply}
                />
            </View>

        </ScrollView>
    );
};

export default FilterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
    },
    label: {
        color: "rgb(34, 50, 99)",
        fontSize: 14,
        fontWeight: '700',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    priceDisplay: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    filterButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginRight: 8,
        marginBottom: 8,
    },
    selected: {
        backgroundColor: 'rgba(64, 191, 255, 0.1)',
        borderColor: '#rgba(64, 191, 255, 0.1)',
    },
    selectedText: {
        color: 'rgb(64, 191, 255)',
        fontSize: 12,
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
        color: 'rgb(144, 152, 177)',
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '700',
    },
    section: {
        paddingTop: 24
    }
});