import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = () => {
    const user = useSelector(state => state.postUserReducer.user) || {};
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 24 }}>
                <View>
                    <Image source={{ uri: user.image}} style={styles.image}/>
                </View>
                <View style={{ gap: 5 }}>
                    <Text style={styles.title}>{user.firstName || 'No Name'}{' '}{user.lastName || ''}</Text>
                    <Text style={styles.email}>{user.email || 'No Email'}</Text>
                </View>
            </View>

            <View style={{ paddingTop: 45 }}>

                <TouchableOpacity style={styles.button}>
                    <View style={styles.buttonContent}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name='gender-female' size={25} color="rgb(64, 191, 255)" />
                            <Text style={styles.text}>Gender</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.text2}>{user.gender}</Text>
                            <Icon name='chevron-right' size={25} color="rgb(144, 152, 177)" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <View style={styles.buttonContent}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name='calendar-blank' size={25} color="rgb(64, 191, 255)" />
                            <Text style={styles.text}>Birthday</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.text2}>12-12-2000</Text>
                            <Icon name='chevron-right' size={25} color="rgb(144, 152, 177)" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <View style={styles.buttonContent}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name='email-outline' size={25} color="rgb(64, 191, 255)" />
                            <Text style={styles.text}>Email</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.text2}>{user.email}</Text>
                            <Icon name='chevron-right' size={25} color="rgb(144, 152, 177)" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <View style={styles.buttonContent}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name='cellphone' size={25} color="rgb(64, 191, 255)" />
                            <Text style={styles.text}>Phone Number</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.text2}>077-15-55-75</Text>
                            <Icon name='chevron-right' size={25} color="rgb(144, 152, 177)" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <View style={styles.buttonContent}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name='lock-outline' size={25} color="rgb(64, 191, 255)" />
                            <Text style={styles.text}>Change Password</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.text2}>*************</Text>
                            <Icon name='chevron-right' size={25} color="rgb(144, 152, 177)" />
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    title: {
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: "700",
        color: "rgb(34,50,99)",
    },
    email: {
        fontFamily: "Poppins",
        fontSize: 12,
        fontWeight: "700",
        color: "rgb(144, 152, 177)",
    },
    button: {
        width: '100%',
        paddingVertical: 10,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        color: 'rgb(34, 50, 99)',
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 14,
        paddingLeft: 15,
    },
    text2: {
        color: 'rgb(144, 152, 177)',
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 12,
    }
});