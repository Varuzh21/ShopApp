import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const StarRating = ({ maxRating = 5, defaultRating = 0, onRatingPress }) => {
    const [rating, setRating] = useState(defaultRating);

    const handleRating = (newRating) => {
        setRating(newRating);
        if (onRatingPress) {
            onRatingPress(newRating);
        }
    };

    return (
        <View style={styles.starContainer}>
            {Array.from({ length: maxRating }, (_, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => handleRating(index + 1)}
                >
                    <Icon
                        name={index < rating ? "star" : "star-o"}
                        size={12}
                        color="#FFD700"
                        style={styles.star}
                    />
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default StarRating

const styles = StyleSheet.create({
    starContainer: {
        flexDirection: 'row',
      },
    star: {
        marginHorizontal: 1,
    },
})