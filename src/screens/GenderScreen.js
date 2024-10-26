import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';

const GenderScreen = () => {
    const route = useRoute();
    const { gender } = route.params;

    const [selectedValue, setSelectedValue] = useState(gender || null);

    useEffect(() => {
        if (gender !== selectedValue) {
            setSelectedValue(gender);
        }
    }, [gender]);

    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>Choose Gender</Text>
            </View>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.picker}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Select a gender..." value={null} />
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                    <Picker.Item label="Other" value="other" />
                </Picker>
            </View>
        </View>
    );
};

export default GenderScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    labelContainer: {
        paddingTop: 16,
    },
    label: {
        color: "rgb(34, 50, 99)",
        fontSize: 16,
        fontWeight: '700',
    },
    pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 24,
    },
    picker: {
        height: 50,
        width: 200,
    },
});