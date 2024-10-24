import {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {MMKVLoader} from 'react-native-mmkv-storage';
import TabNavigator from './TabNavigator';
import LoginScreen from '../screens/LoginScreen';

const storage = new MMKVLoader().initialize();

const AppNavigator = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);

    const tokenFromStore = useSelector((state) => state.postUserReducer.userToken);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)
                const storedToken = storage.getString("userToken");
                if (storedToken) {
                    setUserToken(storedToken);
                }
                setIsLoading(false)
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

    const handleLogout = async () => {
        storage.removeItem("userToken");
        setUserToken(null);
    };
    return (
        <NavigationContainer>
            {userToken !== null ? <TabNavigator onLogout={handleLogout} /> : <LoginScreen />}
        </NavigationContainer>
    )
}

export default AppNavigator;
