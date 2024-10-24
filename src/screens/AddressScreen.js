import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Button from '../components/Button'
import Icon from'react-native-vector-icons/AntDesign'

const AddressScreen = () => {
    const [selectedOrder, setSelectedOrder] = useState(null)

    const handleOrderClick = (index) => {
        setSelectedOrder(index === selectedOrder ? null : index)
    }

    return (
        <View style={styles.container}>
            {[1, 2].map((order, index) => (
                <TouchableOpacity key={index} onPress={() => handleOrderClick(index)}>
                    <View
                        style={[
                            styles.order,
                            selectedOrder === index && styles.selectedOrder,
                        ]}
                    >
                        <Text style={styles.orderTitle}>Priscilla</Text>
                        <Text style={styles.description}>3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States</Text>
                        <Text style={styles.description}>+99 1234567890</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 29 }}>
                            <View style={{ width: '25%' }}>
                                <Button title="Edit" />
                            </View>
                            <TouchableOpacity>
                                <Icon name="delete" size={20} color="rgb(144, 152, 177)" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}

            <View style={{ paddingTop: 110 }}>
                <Button title="Add Address" />
            </View>
        </View>
    )
}

export default AddressScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 10
    },
    order: {
        width: '100%',
        marginTop: 16,
        borderWidth: 1,
        borderColor: 'rgb(235, 240, 255)',
        padding: 24,
        gap: 16,
        borderRadius: 5,
    },
    selectedOrder: {
        borderColor: 'rgb(64, 191, 255)',
    },
    orderTitle: {
        color: 'rgb(34, 50, 99)',
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '700',
    },
    description: {
        color: 'rgb(144, 152, 177)',
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '700',
    }
})