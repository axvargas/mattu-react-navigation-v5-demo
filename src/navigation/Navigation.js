import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';


import HomeStack from './stacks/HomeStack';
import AboutStack from './stacks/AboutStack';
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';


const Drawer = createDrawerNavigator();

const Navigation = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
        >
            <Drawer.Screen
                name="Home"
                component={HomeStack}
                options={{
                    title: 'Home',
                }}
            />
            <Drawer.Screen
                name="About"
                component={AboutStack}
                options={{
                    title: 'About'
                }}
            />
        </Drawer.Navigator>
    )
}
export default Navigation