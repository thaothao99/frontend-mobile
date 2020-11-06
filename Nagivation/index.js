import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/home';
import CategoryScreen from '../Screens/category';
import SearchScreen from '../Screens/search';
import { Ionicons } from '@expo/vector-icons';
import AccountStackSceen from '../Screens/account';

const Tab = createMaterialBottomTabNavigator();
export default function NavigationApp() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                activeColor="#000000"
                barStyle={{ backgroundColor: '#FFFFFF' }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={
                        {
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color }) => (
                                <Ionicons name="md-home" color={color} size={26} />
                            )
                        }
                    }
                />
                <Tab.Screen
                    name="Category"
                    component={CategoryScreen}
                    options={
                        {
                            tabBarIcon: ({ color }) => (
                                <Ionicons name="ios-color-filter" color={color} size={26} />
                            )
                        }
                    }

                />
                <Tab.Screen
                    name="Search"
                    component={SearchScreen}
                    options={
                        {
                            tabBarIcon: ({ color }) => (
                                <Ionicons name="ios-search" color={color} size={26} />
                            )
                        }
                    } />
                <Tab.Screen
                    name="Account"
                    component={AccountStackSceen}
                    options={
                        {
                            tabBarIcon: ({ color }) => (
                                <Ionicons name="md-person" color={color} size={26} />
                            )
                        }
                    }
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}