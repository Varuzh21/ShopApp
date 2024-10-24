import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

export default function AccountScreenNav({onLogout}) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Account'
                children={() => <AccountScreen onLogout={onLogout} />}
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
                name='Profile'
                component={ProfileScreen}
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