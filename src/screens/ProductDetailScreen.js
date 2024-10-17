import { useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleProductRequest, getProductsRequest } from '../store/actions/products';
import { useRoute } from '@react-navigation/native';
import StarRating from '../components/StarRating';
import ProductsSlider from '../components/ProductsSlider';
import Button from '../components/Button';
import _ from 'lodash';

const ProductDetail = () => {
    const route = useRoute();
    const dispatch = useDispatch();
    const { productId } = route.params;

    useEffect(() => {
        (async () => {
            await Promise.all(
                dispatch(getSingleProductRequest(productId)),
                dispatch(getProductsRequest()))
        })()
    }, [productId]);

    const product = useSelector((state) => state.getSingleProductReducer.product) || [];
    const products = useSelector((state) => state.getProductsReducer.products) || [];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageRow}>
                {(product.images || []).map((item) => {
                    const imageUri = item || 'https://example.com/fallback-image.png';
                    return (
                        <View key={_.uniqueId()} style={styles.imageContainer}>
                            <Image source={{ uri: imageUri }} style={styles.image} />
                        </View>
                    );
                })}
            </View>

            <View style={styles.productDetails}>
                <Text style={styles.title}>{product.title || 'No title available'}</Text>
                <StarRating maxRating={5} defaultRating={product.rating || 0} />
                <Text style={styles.price}>${(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}</Text>
                <Text style={styles.description}>{product.description || 'No description available'}</Text>
            </View>

            <View style={styles.reviewSection}>
                <View style={styles.reviewHeader}>
                    <Text style={styles.reviewTitle}>Review Product</Text>
                    <TouchableOpacity>
                        <Text style={styles.butText}>See More</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.ratingWithCount}>
                    <StarRating maxRating={5} defaultRating={product.rating || 0} />
                    <Text style={styles.ratingText}>{product.rating} ({product.reviews?.length || 0} Reviews)</Text>
                </View>

                <View style={styles.reviewList}>
                    {Array.isArray(product.reviews) && product.reviews.length > 0 ? (
                        product.reviews.map((review) => (
                            <View key={_.uniqueId()} style={styles.reviewItem}>
                                <View style={styles.reviewerInfo}>
                                    <Image source={{ uri: review.authorImage }} style={styles.reviewerImage} />
                                    <View>
                                        <Text style={styles.reviewAuthor}>{review.author}</Text>
                                        <StarRating maxRating={5} defaultRating={review.rating} />
                                    </View>
                                </View>
                                <Text style={styles.reviewText}>{review.comment}</Text>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.noReviewsText}>No reviews available</Text>
                    )}
                </View>
            </View>

            <View style={{ paddingTop: 23 }}>
                <View style={{ paddingBottom: 12 }}>
                    <Text style={styles.reviewTitle}>You Might Also Like</Text>
                </View>
                <ProductsSlider products={products.products} />
            </View>

            <View style={{ paddingVertical: 21 }}>
                <Button title="Add To Cart" />
            </View>
        </ScrollView>
    );
};

export default ProductDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    imageRow: {
        flexDirection: 'row',
        paddingBottom: 20,
    },
    imageContainer: {
        width: 400,
        height: 200,
        marginRight: 10,
        backgroundColor: '#F5F5F5',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    productDetails: {
        paddingTop: 40,
        gap: 8,
    },
    title: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 20,
        color: 'rgb(34, 50, 99)',
        textAlign: 'left',
    },
    price: {
        color: 'rgb(64, 191, 255)',
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 20,
        textAlign: 'left',
        marginVertical: 16,
    },
    description: {
        color: 'rgb(144, 152, 177)',
    },
    reviewSection: {
        paddingTop: 16,
    },
    reviewHeader: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    reviewTitle: {
        color: 'rgb(34, 50, 99)',
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 14,
    },
    ratingWithCount: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16
    },
    ratingText: {
        marginLeft: 8,
        color: 'rgb(144, 152, 177)',
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 12,
    },
    butText: {
        color: 'rgb(64, 191, 255)',
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 14,
    },
    reviewItem: {
        marginBottom: 16,
    },
    reviewerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    reviewerImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#F5F5F5',
    },
    reviewAuthor: {
        color: 'rgb(34, 50, 99)',
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 14,
    },
    reviewText: {
        color: 'rgb(144, 152, 177)',
        marginTop: 8,
    },
    noReviewsText: {
        fontSize: 14,
        color: 'rgb(144, 152, 177)',
        fontFamily: 'Poppins',
        textAlign: 'center',
        paddingVertical: 10,
    },
});