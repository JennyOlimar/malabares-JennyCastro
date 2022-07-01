import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Orders from '../../screens/Orders';
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
        <Stack.Screen name="Ordenes" component={Orders} options={{title: 'Orden de compra'}}/>
    </Stack.Navigator>
);