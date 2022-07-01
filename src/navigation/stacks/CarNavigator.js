import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Car from '../../screens/Car';
import { COLORS } from '../../constants/color';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: { backgroundColor: COLORS.primary },
            headerTintColor: COLORS.secondary,
            headerTitleStyle: { fontWeight: 'bold'}
        }}
    >
        <Stack.Screen name="Car" component={Car} options={{title: 'Carrito de compras'}}/>
    </Stack.Navigator>
);