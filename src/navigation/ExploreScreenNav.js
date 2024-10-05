import { TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import ExploreScreen from '../screens/ExploreScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import NotificationScreen from '../screens/NotificationScreen';
import FavoriteProductScreen from '../screens/FavoriteProductScreen';
import SearchResultsScreen from '../screens/SearchResultsScreen';


const Stack = createStackNavigator();

export default function ExploreScreenNav() {
    const navigation = useNavigation();

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name='ExploreScreen' component={ExploreScreen}/>
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
            <Stack.Screen
                name="Favorite Product"
                component={FavoriteProductScreen}
                options={{
                    headerShown: true,
                    headerTitleStyle: {
                        fontFamily: 'Poppins',
                        fontSize: 16,
                        fontWeight: '700',
                        color: 'rgb(34, 50, 99)',
                    },
                    headerLeft: () => (
                        <TouchableOpacity style={{ paddingLeft: 16 }} onPress={() => navigation.navigate('ExploreScreen')}>
                            <Icon name="left" size={15} color="rgb(144, 152, 177)" />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen
                name='Notification'
                component={NotificationScreen}
                options={{
                    headerShown: true,
                    headerTitleStyle: {
                        fontFamily: 'Poppins',
                        fontSize: 16,
                        fontWeight: '700',
                        color: 'rgb(34, 50, 99)',
                    },
                    headerLeft: () => (
                        <TouchableOpacity style={{ paddingLeft: 16 }} onPress={() => navigation.navigate('ExploreScreen')}>
                            <Icon name="left" size={15} color="rgb(144, 152, 177)" />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen 
                name='SearchResults'
                component={SearchResultsScreen}
            />
        </Stack.Navigator>
    )
}
