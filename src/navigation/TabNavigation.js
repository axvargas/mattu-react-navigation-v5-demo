import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './stacks/HomeStack';
import AboutStack from './stacks/AboutStack';


const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    title: 'Home',
                }}
            />
            <Tab.Screen
                name="About"
                component={AboutStack}
                options={{
                    title: 'About'
                }}
            />
        </Tab.Navigator>
    )
}
export default Navigation