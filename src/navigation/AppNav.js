import React, { useContext } from 'react'
import {View, ActivityIndicator} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import { AuthContext } from '../context/AuthContext';
import LoginScreen from '../screens/LoginScreen';

const AppNav = () => {
    const { isLoading, userToken } = useContext(AuthContext);

    if (isLoading){
       <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
           <ActivityIndicator size="large" />
       </View>
    }
    return (
        <NavigationContainer>
            {userToken !== null ? <TabNavigator/> : <LoginScreen /> }
        </NavigationContainer>
    )
}

export default AppNav;