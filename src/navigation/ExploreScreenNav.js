import { createStackNavigator } from '@react-navigation/stack';
import ExploreScreen from '../screens/ExploreScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import NotificationScreen from '../screens/NotificationScreen';
import FavoriteProductScreen from '../screens/FavoriteProductScreen';
import SearchResultsScreen from '../screens/SearchResultsScreen';
import FilterScreen from '../screens/FilterScreen';


const Stack = createStackNavigator();

export default function ExploreScreenNav() {
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
                }}
            />
            <Stack.Screen 
                name='SearchResults'
                component={SearchResultsScreen}
            />
            <Stack.Screen
                name='Filter'
                component={FilterScreen}
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
