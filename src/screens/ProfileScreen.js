import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useSelector } from 'react-redux';

const ProfileScreen = () => {
    const user = useSelector(state => state.postUserReducer.user) || [];

    console.log(user)
    return (
        <View style={styles.container}>
            <Text>{user.firstName || 'No Name'}</Text>
            {user.Image ? (
                <Image source={{ uri: user.Image }} style={styles.image} />
            ) : (
                <Image source={{ uri: 'https://img.icons8.com/fluency/48/user-male-circle--v1.png' }} style={styles.image} />
            )}
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50, // Makes the image circular
    },
});