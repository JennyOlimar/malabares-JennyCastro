import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../screens/Home';
import Productos from '../../screens/Productos';
import Details from '../../screens/Details';
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
        <Stack.Screen name="Home" component={Home} options={{title: 'Tienda Online'}}/>
        <Stack.Screen name="Productos" component={Productos} options={({route}) => ({title: route.params.name})}/>
        <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
);