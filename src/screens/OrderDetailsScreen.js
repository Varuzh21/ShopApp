import { useEffect, } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsRequest } from "../store/actions/products"
import Button from '../components/Button';
import Icon from "react-native-vector-icons/Feather"
import ProductItem from '../components/ProductItem';

const OrderDetailsScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            dispatch(getProductsRequest())
        })()
    }, [])

    const products = useSelector(state => state.getProductsReducer.products) || [];

    return (
        <ScrollView style={styles.container}>
            <View style={{ paddingTop: 16, paddingBottom: 24 }}>
                <View style={styles.stepIndicator}>
                    <View style={styles.stepParent}>
                        <TouchableOpacity style={styles.btn}>
                            <Icon name="check" color="#fff" size={20} />
                        </TouchableOpacity>
                        <Text style={styles.step}>Booking</Text>
                    </View>

                    <View style={styles.stepParent}>
                        <TouchableOpacity style={styles.btn}>
                            <Icon name="check" color="#fff" size={20} />
                        </TouchableOpacity>
                        <Text style={styles.step}>Shipping</Text>
                    </View>

                    <View style={styles.stepParent}>
                        <TouchableOpacity style={styles.btn}>
                            <Icon name="check" color="#fff" size={20} />
                        </TouchableOpacity>
                        <Text style={styles.step}>Arriving</Text>
                    </View>

                    <View style={styles.stepParent}>
                        <TouchableOpacity style={styles.btn2}>
                            <Icon name="check" color="#fff" size={20} />
                        </TouchableOpacity>
                        <Text style={styles.step}>Success</Text>
                    </View>

                </View>
            </View>


            <View style={styles.productList}>
                <Text style={styles.sectionTitle}>Product</Text>
                {products.map((product) => (
                    <ProductItem
                        key={product.id}
                        name={product.title}
                        price={product.price - (product.price * product.discountPercentage / 100).toFixed(3)}
                        imageUrl={product.thumbnail}
                        isFavorite={true}
                    />
                ))}

            </View>

            <Text style={styles.sectionTitle}>Shipping Details</Text>

            <View style={styles.paymentDetails}>
                <View style={styles.detailRow}>
                    <Text style={styles.detailTitle}>Date Shipping:</Text>
                    <Text style={styles.detailText}>January 16, 2020</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.detailTitle}>Shipping:</Text>
                    <Text style={styles.detailText}>POS Regular</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.detailTitle}>No. Rehi:</Text>
                    <Text style={styles.detailText}>000192848573</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.detailTitle}>Address:</Text>
                    <Text style={styles.detailText}>2727 New Bowerrc</Text>
                </View>
            </View>

            <Text style={styles.sectionTitle}>Payment Details</Text>

            <View style={styles.paymentDetails}>
                <View style={styles.detailRow}>
                    <Text style={styles.detailTitle}>Items (3):</Text>
                    <Text style={styles.detailText}>$598.86</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.detailTitle}>Shipping:</Text>
                    <Text style={styles.detailText}>$40.00</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.detailTitle}>Import Charges:</Text>
                    <Text style={styles.detailText}>$128.00</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.detailRow}>
                    <Text style={styles.sectionTitle}>Total Price:</Text>
                    <Text style={styles.totalText}>$766.86</Text>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title="Notify Me"
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    stepIndicator: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    stepParent: {
        width: "13%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    step: {
        color: "rgb(144, 152, 177)",
        fontFamily: "Poppins",
        fontSize: 11,
        fontWeight: '400',
    },
    productList: {
        width: "100%",
        marginBottom: 16,
    },
    sectionTitle: {
        color: "rgb(34, 50, 99)",
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 8,
    },
    shippingDetails: {
        marginBottom: 16,
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 8,
    },
    paymentDetails: {
        marginBottom: 16,
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "rgb(235, 240, 255)"
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    detailTitle: {
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '400',
        color: 'rgb(34, 50, 99)',
        opacity: 0.5
    },
    detailText: {
        color: 'rgb(34, 50, 99)',
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '400',
    },
    totalTitle: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 16,
        color: '#333',
    },
    totalText: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 12,
        color: 'rgb(64, 191, 255)',
    },
    divider: {
        borderBottomColor: 'rgb(235, 240, 255)',
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        marginVertical: 8,
    },
    buttonContainer: {
        marginVertical: 16,
    },
    btn: {
        width: "100%",
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: 'rgb(64, 191, 255)',
        marginBottom: 12
    },
    btn2: {
        width: "100%",
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: 'rgb(235, 240, 255)',
        marginBottom: 12
    }
});

export default OrderDetailsScreen;