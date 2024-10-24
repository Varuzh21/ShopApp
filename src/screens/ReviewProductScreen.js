import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProductRequest } from '../store/actions/products'
import { useRoute } from '@react-navigation/native';
import StarRating from '../components/StarRating';
import User from '../assets/icons/user.svg';
import Button from '../components/Button';

const ReviewProductScreen = () => {
    const route = useRoute();
    const dispatch = useDispatch();
    const { productId } = route.params;
    const [selectedCondition, setSelectedCondition] = useState('All Review');

    useEffect(() => {
        (async () => {
            dispatch(getSingleProductRequest(productId));
        })();
    }, [productId])

    const handleConditionPress = (condition) => {
        setSelectedCondition(condition);
    };

    const product = useSelector((state) => state.getSingleProductReducer.product) || [];

    return (
        <ScrollView style={styles.container}>
            <ScrollView horizontal={true} style={{ width: "100%", paddingTop: 16, flexDirection: 'row' }}>
                <TouchableOpacity style={[styles.filterButton, selectedCondition === 'All Review' && styles.selected,]}
                    onPress={() => handleConditionPress('All Review')}>
                    <Text style={[
                        styles.text,
                        selectedCondition === 'All Review' ?
                            styles.selectedText : null,]}>
                        All Review
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.filterButton,
                        selectedCondition === 'Star1' && styles.selected,
                    ]}
                    onPress={() => handleConditionPress('Star1')}
                >
                    <View style={styles.starContainer}>
                        <StarRating maxRating={1} defaultRating={1} />
                        <Text style={[
                            styles.text,
                            selectedCondition === 'Star1' ? styles.selectedText : null,
                        ]}>
                            1
                        </Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity
                    style={[
                        styles.filterButton,
                        selectedCondition === 'Star2' && styles.selected,
                    ]}
                    onPress={() => handleConditionPress('Star2')}
                >
                    <View style={styles.starContainer}>
                        <StarRating maxRating={1} defaultRating={1} />
                        <Text style={[
                            styles.text,
                            selectedCondition === 'Star2' ? styles.selectedText : null,
                        ]}>
                            2
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.filterButton,
                        selectedCondition === 'Star3' && styles.selected,
                    ]}
                    onPress={() => handleConditionPress('Star3')}
                >
                    <View style={styles.starContainer}>
                        <StarRating maxRating={1} defaultRating={1} />
                        <Text style={[
                            styles.text,
                            selectedCondition === 'Star3' ? styles.selectedText : null,
                        ]}>
                            3
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.filterButton,
                        selectedCondition === 'Star4' && styles.selected,
                    ]}
                    onPress={() => handleConditionPress('Star4')}
                >
                    <View style={styles.starContainer}>
                        <StarRating maxRating={1} defaultRating={1} />
                        <Text style={[
                            styles.text,
                            selectedCondition === 'Star4' ? styles.selectedText : null,
                        ]}>
                            4
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.filterButton,
                        selectedCondition === 'Star5' && styles.selected,
                    ]}
                    onPress={() => handleConditionPress('Star5')}
                >
                    <View style={styles.starContainer}>
                        <StarRating maxRating={1} defaultRating={1} />
                        <Text style={[
                            styles.text,
                            selectedCondition === 'Star5' ? styles.selectedText : null,
                        ]}>
                            5
                        </Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>

            <View style={styles.reviewList}>
                {Array.isArray(product.reviews) && product.reviews.length > 0 ? (
                    product.reviews.map((review, index) => (
                        <View key={index} style={styles.reviewItem}>
                            <View style={styles.reviewerInfo}>
                                <User style={styles.userIcon} />
                                <View style={{gap: 4}}>
                                    <Text style={styles.reviewAuthor}>{review.reviewerName}</Text>
                                    <StarRating maxRating={5} defaultRating={review.rating} />
                                </View>
                            </View>
                            <Text style={styles.reviewText}>
                                {review.comment} {" "}
                                air max are always very comfortable fit,
                                clean and just perfect in every way.
                                just the box was too small and scrunched the sneakers
                                up a little bit, not sure if the box was always this
                                small but the 90s are and will always be one of my
                                favorites.
                            </Text>
                        </View>
                    ))
                ) : (
                    <Text style={styles.noReviewsText}>No reviews available</Text>
                )}
            </View>

            <View style={{paddingTop: 30, paddingBottom: 16}}>
                <Button title="Write a review" />
            </View>

        </ScrollView>
    )
}

export default ReviewProductScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    filterButton: {
        height: 50,
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginRight: 8,
        marginBottom: 8,
    },
    text: {
        fontFamily: 'Poppins',
        color: 'rgb(144, 152, 177)',
        fontSize: 12,
        fontWeight: '700',
    },
    selected: {
        backgroundColor: 'rgba(64, 191, 255, 0.1)',
        borderColor: 'rgb(64, 191, 255)',
    },
    selectedText: {
        fontFamily: 'Poppins',
        color: 'rgb(64, 191, 255)',
        fontSize: 12,
        fontWeight: '700',
    },
    starContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    reviewList: {
        paddingTop: 20
    },
    reviewItem: {
        marginBottom: 16,
    },
    reviewerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingBottom: 20
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
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 12,
        marginTop: 8,
    },
    noReviewsText: {
        fontSize: 14,
        color: 'rgb(144, 152, 177)',
        fontFamily: 'Poppins',
        textAlign: 'center',
        paddingVertical: 10,
    },
})
