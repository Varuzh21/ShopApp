import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../screens/CartScreen';
import ShipToScreen from '../screens/ShipToScreen';
import PaymentScreen from '../screens/PaymentScreen';
import ChooseCardScreen from '../screens/ChooseCardScreen';

const Stack = createStackNavigator();

const CartScreenNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Your Cart' component={CartScreen} />
      <Stack.Screen name='Ship To' component={ShipToScreen} />
      <Stack.Screen name='Payment' component={PaymentScreen} />
      <Stack.Screen name='Choose Card' component={ChooseCardScreen} />
    </Stack.Navigator>
  )
}

export default CartScreenNav;