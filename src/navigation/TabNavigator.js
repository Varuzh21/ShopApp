import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartScreenNav from './CartScreenNav';
import OfferScreen from '../screens/OfferScreen';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/AntDesign';
import HomeScreenNav from './HomeScreenNav';
import ExploreScreenNav from './ExploreScreenNav'
import AccountScreenNav from './AccountScreenNav';

const Tab = createBottomTabNavigator();

const CartIconWithBadge = ({ focused, cartItemCount }) => (
  <View style={{ width: 30, height: 30 }}>
    <Icon
      name="shopping-cart"
      size={24}
      color={focused ? "rgb(64, 191, 255)" : "rgb(144, 152, 177)"}
    />
    {cartItemCount > 0 && (
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{cartItemCount}</Text>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    right: -8,
    top: -5,
    backgroundColor: 'rgb(251, 113, 129)',
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '700',
  },
});


export default function TabNavigator({ onLogout }) {
  const cartItemCount = 4;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
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
        component={HomeScreenNav}
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
        component={ExploreScreenNav}
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
        component={CartScreenNav}
        options={{
          tabBarIcon: ({ focused }) => (
            <CartIconWithBadge focused={focused} cartItemCount={cartItemCount} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'rgb(64, 191, 255)' : 'rgb(144, 152, 177)' }}>Cart</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Offer"
        component={OfferScreen}
        options={{
          headerShown: true,
          headerTitleStyle: {
            fontFamily: 'Poppins',
            fontSize: 16,
            fontWeight: '700',
            color: 'rgb(34, 50, 99)',
          },
          tabBarIcon: ({ focused }) => (
            focused ? <Icon2 name="tago" size={24} color="rgb(64, 191, 255)" /> : <Icon2 name="tago" size={24} color="rgb(144, 152, 177)" />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'rgb(64, 191, 255)' : 'rgb(144, 152, 177)' }}>Offer</Text>
          )
        }}
      />
      <Tab.Screen
        name="AccountScreenNav"
        children={() => <AccountScreenNav onLogout={onLogout} />} 
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