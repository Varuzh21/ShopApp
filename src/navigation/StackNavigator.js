import {useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/LoginScreen';
import Logout from '../screens/LogoutScreen';
import TabNavigator from './TabNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function StackNavigator() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const token =  AsyncStorage.getItem('token');
    if (token) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  }, [isUserLoggedIn]);

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      {isUserLoggedIn ? (
        <Stack.Screen name="MainTabs" component={TabNavigator} />
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
      <Stack.Screen name="Logout" component={Logout} />
    </Stack.Navigator>
  );
}