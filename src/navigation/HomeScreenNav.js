import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import FavoriteProduct from '../screens/FavoriteProductScreen';
import Icon from'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();

const HomeScreenNav = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen
                name="Favorite Product"
                component={FavoriteProduct}
                options={{
                    headerShown: true,
                    headerTitleStyle: {
                        fontFamily: 'Poppins',
                        fontSize: 16,
                        fontWeight: '700',
                        color: 'rgb(34, 50, 99)',
                    },
                    headerLeft: () => (
                        <TouchableOpacity style={{ paddingLeft: 16 }} onPress={() => navigation.goBack()}>
                            <Icon name="left" size={15} color="rgb(144, 152, 177)" />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen
                name="Product Detail"
                component={ProductDetailScreen}
                options={{
                    headerShown: true,
                    headerTitleStyle: {
                        fontFamily: 'Poppins',
                        fontSize: 16,
                        fontWeight: '700',
                        color: 'rgb(34, 50, 99)',
                    },
                    headerLeft: () => (
                        <TouchableOpacity style={{ paddingLeft: 16 }} onPress={() => navigation.goBack()}>
                            <Icon name="left" size={15} color="rgb(144, 152, 177)" />
                        </TouchableOpacity>
                    ),
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeScreenNav;