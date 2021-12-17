import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Introduction from '../screens/introduction/Introduction';
import Login from '../screens/login/Login';
import Home from '../screens/home/Home';
import Product from '../screens/product/Product';
import Profile from '../screens/profile/Profile';
import Notification from '../screens/notification/Notification';
import Store from '../screens/store/Store';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        screenOptions={{
            cardStyle: {
                backgroundColor: '#FFF'
            },
            gestureEnabled: false,
            animationEnabled: false,
            headerShown: false,
        }}
    >
        {/* <stackRoutes.Screen name='Introduction' component={Introduction} /> */}
        {/* <stackRoutes.Screen name='Login' component={Login} /> */}
        <stackRoutes.Screen name='Home' component={Home} />
        <stackRoutes.Screen name='Product' component={Product} />
        <stackRoutes.Screen name='Store' component={Store} />
        <stackRoutes.Screen name='Profile' component={Profile} />
        <stackRoutes.Screen name='Notification' component={Notification} />
        
    </stackRoutes.Navigator>
)

export default AppRoutes;

// npm install @react-navigation/native
// expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
// npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view