import React from 'react';
import { Text } from'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import CartScreen from '../screens/CartScreen';
import OfferScreen from '../screens/OfferScreen';
import AccountScreen from '../screens/AccountScreen';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default function TabNavigator({ onLogout }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          width: '100%',
          height: 59,
          backgroundColor: '#fff',
        },
        tabBarLabelStyle: {
          fontFamily: 'Poppins',
          fontSize: 10,
          fontWeight: '700',
          textAlign: 'center',
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <Icon name="home" size={24} color="rgb(64, 191, 255)" /> : <Icon name="home" size={24} color="rgb(144, 152, 177)" />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'rgb(64, 191, 255)' : 'rgb(144, 152, 177)' }}>Home</Text>
          )
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <Icon name="search" size={24} color="rgb(64, 191, 255)" /> : <Icon name="search" size={24} color="rgb(144, 152, 177)" />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'rgb(64, 191, 255)' : 'rgb(144, 152, 177)' }}>Explore</Text>
          )
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <Icon name="shopping-cart" size={24} color="rgb(64, 191, 255)" /> : <Icon name="shopping-cart" size={24} color="rgb(144, 152, 177)" />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'rgb(64, 191, 255)' : 'rgb(144, 152, 177)' }}>Cart</Text>
          )
        }}
      />
      <Tab.Screen
        name="Offer"
        component={OfferScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <Icon2 name="tago" size={24} color="rgb(64, 191, 255)" /> : <Icon2 name="tago" size={24} color="rgb(144, 152, 177)" />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'rgb(64, 191, 255)' : 'rgb(144, 152, 177)' }}>Offer</Text>
          )
        }}
      />
      <Tab.Screen
        name="Account"
        children={() => <AccountScreen onLogout={onLogout} />}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <Icon name="user" size={24} color="rgb(64, 191, 255)" /> : <Icon name="user" size={24} color="rgb(144, 152, 177)" />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'rgb(64, 191, 255)' : 'rgb(144, 152, 177)' }}>Account</Text>
          )
        }}
      />

    </Tab.Navigator>
  );
}
