import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/LoginScreen';
import Logout from '../screens/LogoutScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MainTabs" component={TabNavigator} /> 
      <Stack.Screen name="Logout" component={Logout} />
    </Stack.Navigator>
  );
}