import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const OrderScreen = () => {
    const navigation = useNavigation();
    const [selectedOrder, setSelectedOrder] = useState(null)

    const handleOrderClick = (index) => {
        setSelectedOrder(index === selectedOrder ? null : index)
        navigation.navigate('OrderDetails')
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
                        <Text style={styles.orderTitle}>LQNSU346JK</Text>
                        <Text style={styles.orderNumber}>Order at E-comm : August 1, 2024</Text>
                        <View style={{ borderWidth: 1, borderColor: 'rgb(235, 240, 255)', borderStyle: 'dashed', }}></View>
                        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                            <Text style={styles.orderNumber}>Order Status</Text>
                            <Text style={{ fontFamily: 'Poppins', fontSize: 12, fontWeight: '400', color: 'rgb(34, 50, 99)' }}>Shipping</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                            <Text style={styles.orderNumber}>Items</Text>
                            <Text style={{ fontFamily: 'Poppins', fontSize: 12, fontWeight: '400', color: 'rgb(34, 50, 99)' }}>2</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                            <Text style={styles.orderNumber}>Price</Text>
                            <Text style={{ fontFamily: 'Poppins', fontSize: 12, fontWeight: '400', color: 'rgb(64, 191, 255)' }}>$299,43</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default OrderScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    orderNumber: {
        color: 'rgb(34, 50, 99)',
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '400',
    }
})