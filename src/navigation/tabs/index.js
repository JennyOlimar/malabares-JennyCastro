import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Stacks from '../stacks/index';
import Tabs from '../stacks/CarNavigator';
import Orders from '../stacks/OrdersNavigator';
import { COLORS } from '../../constants/color';
import { logout } from '../../app/api';
import Provider from '../../app/provider';


const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator 
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: style.tabBar,
            headerTintColor: COLORS.secondary,
            headerTitleStyle: { fontWeight: 'bold'},
            headerRight: (props) => {
                return (
                    <TouchableOpacity onPress={logout}>
                        <View style={style.logout}>
                            <Ionicons name="log-out" size={30} color="#2D93AD" />
                            <Text style={style.textLogout}>Log out</Text>
                        </View>
                    </TouchableOpacity>
                );
            }
        }}>
        <Tab.Screen name="Juegos Malabares" component={Stacks}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={style.item}>
                        <Ionicons name="md-home" size={30} color="#2D93AD" />
                        <Text>Tienda</Text>
                    </View>
                )  
            }}
        />
        <Tab.Screen name="Carrito" component={Tabs} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={style.item}>
                        <Ionicons name="cart" size={30} color="#2D93AD" />
                        <Text>Carrito</Text>
                    </View>
                )
            }}
        />
        <Tab.Screen name="Ordenes" component={Orders} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={style.item}>
                        <Ionicons name="cart" size={30} color="#2D93AD" />
                        <Text>Ordenes</Text>
                    </View>
                )
            }}
        />

    </Tab.Navigator>
);

const style = StyleSheet.create({
    tabBar: {
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 10},
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logout: {
        flexDirection: 'row',
    },
    textLogout:{
        alignSelf: 'center',
        marginRight: '30px',
        marginLeft: '10px',
        paddingBottom: '5px',
    }
});