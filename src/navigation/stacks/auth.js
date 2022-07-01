import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Register from '../../screens/Register';
import Login from '../../screens/Login';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
    screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
        }}>
        <Stack.Screen name="Registro" component={Register} options={{title: 'Registro'}}/>
        <Stack.Screen name="Login" component={Login} options={{title: 'Login'}}/>
    </Stack.Navigator>
);