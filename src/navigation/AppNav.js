import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { MMKVLoader } from 'react-native-mmkv-storage';
import TabNavigator from './TabNavigator';
import LoginScreen from '../screens/LoginScreen';

const storage = new MMKVLoader().initialize();

const AppNav = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);

    const tokenFromStore = useSelector((state) => state.postUserReducer.userToken);

    useEffect(() => {
        (async () => {
            try {
                const storedToken = storage.getString("userToken");
                if (storedToken) {
                    setUserToken(storedToken);
                }
            } catch (error) {
                setIsLoading(false);
                console.error("Failed to load token from storage:", error);
            }
        })()
    }, [tokenFromStore]);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" />
            </View>
        )
    }
    return (
        <NavigationContainer>
            {userToken !== null ? <TabNavigator /> : <LoginScreen />}
        </NavigationContainer>
    )
}

export default AppNav;