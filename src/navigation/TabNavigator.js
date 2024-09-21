import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import CartScreen from '../screens/CartScreen';
import OfferScreen from '../screens/OfferScreen';
import AccountScreen from '../screens/AccountScreen';
import Home from '../assets/icons/home.svg';
import Explore from "../assets/icons/explore.svg"
import Cart from '../assets/icons/cart.svg';
import Offer from '../assets/icons/offer.svg';
import Account from '../assets/icons/account.svg';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        width: '100%',
        height: 59,
        backgroundColor: '#fff',
      },
      tabBarLabelStyle: {
        fontFamily: "Poppins",
        fontSize: 10,
        fontWeight: "700",
        color: "rgb(144, 152, 177)",
        textAlign: "center",
      }
    }}>
      <Tab.Screen options={{
        tabBarIcon: ({ focused }) => (
          focused ? <Home width={20} height={20} stroke="rgb(64, 191, 255)" fill="#fff" /> : <Home width={20} height={20} />
        )
      }} name="Home" component={HomeScreen} />
      <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              focused? <Explore width={20} height={20} stroke="rgb(64, 191, 255)"/> : <Explore width={20} height={20} />
            )
          }}name="Explore" component={ExploreScreen} />
      <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              focused? <Cart width={20} height={20} stroke="rgb(64, 191, 255)"/> : <Cart width={20} height={20} />
            )
          }} 
      name="Cart" component={CartScreen} />
      <Tab.Screen 
          options={{
            tabBarIcon: ({ focused }) => (
              focused? <Offer width={20} height={20} stroke="rgb(64, 191, 255)"/> : <Offer width={20} height={20} />
            )
          }}
      name="Offer" component={OfferScreen} />
      <Tab.Screen 
          options={{
            tabBarIcon: ({ focused }) => (
              focused? <Account width={20} height={20} stroke="rgb(64, 191, 255)"/> : <Account width={20} height={20} />
            )
          }}
      name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}