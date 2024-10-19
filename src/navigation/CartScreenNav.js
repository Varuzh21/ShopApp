import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../screens/CartScreen';
import ShipToScreen from '../screens/ShipToScreen';
import PaymentScreen from '../screens/PaymentScreen';
import ChooseCardScreen from '../screens/ChooseCardScreen';

const Stack = createStackNavigator();

const CartScreenNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Your Cart'
        component={CartScreen}
        options={{
          headerShown: true,
          headerTitleStyle: {
            fontFamily: 'Poppins',
            fontSize: 16,
            fontWeight: '700',
            color: 'rgb(34, 50, 99)',
          },
          headerStyle: {
            borderBottomWidth: 1,
            borderColor: 'rgb(235, 240, 255)',
          }
        }}
      />
      <Stack.Screen
        name='Ship To'
        component={ShipToScreen}
        options={{
          headerShown: true,
          headerTitleStyle: {
            fontFamily: 'Poppins',
            fontSize: 16,
            fontWeight: '700',
            color: 'rgb(34, 50, 99)',
          },
          headerStyle: {
            borderBottomWidth: 1,
            borderColor: 'rgb(235, 240, 255)',
          }
        }}
      />
      <Stack.Screen name='Payment' component={PaymentScreen} />
      <Stack.Screen
        name='Choose Card'
        component={ChooseCardScreen}
        options={{
          headerShown: true,
          headerTitleStyle: {
            fontFamily: 'Poppins',
            fontSize: 16,
            fontWeight: '700',
            color: 'rgb(34, 50, 99)',
          },
          headerStyle: {
            borderBottomWidth: 1,
            borderColor: 'rgb(235, 240, 255)',
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default CartScreenNav;