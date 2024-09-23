import { useState, useEffect, useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import LoginScreen from '../screens/LoginScreen';
import TabNavigator from './TabNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { postUserRequest } from '../store/actions/users';

const Stack = createStackNavigator();

export default function StackNavigator() {
  const dispatch = useDispatch();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const userToken = useSelector((state) => state.postUserReducer.userToken);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('token');
      setIsUserLoggedIn(!!token);
    };

    checkLoginStatus();
  }, [isUserLoggedIn]);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    setIsUserLoggedIn(false);
  };

  const handleLogin = useCallback(async (form) => {
    await dispatch(postUserRequest(form));
  
    const token = await AsyncStorage.getItem('token');
    if (token) {
      await AsyncStorage.setItem("token", userToken);
      setIsUserLoggedIn(true);
    } else {
      // Handle login error
      console.log("Login Error: ");
    } 
  }, [userToken, dispatch]);
  

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isUserLoggedIn ? (
        <Stack.Screen name="Login">
          {() => <LoginScreen onLogin={handleLogin} />}
        </Stack.Screen>
      ) : (
        <Stack.Screen name="MainTabs">
          {() => <TabNavigator onLogout={handleLogout} />}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
}