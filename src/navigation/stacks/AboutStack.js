import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import About from '../../screens/About'
import Contact from '../../screens/Contact'
import Courses from '../../screens/Courses'

const Stack = createStackNavigator()

const AboutStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="About"
        >
            <Stack.Screen
                name="About"
                component={About}
                options={{
                    title: 'About',
                }}
            />
            <Stack.Screen
                name="Contact"
                component={Contact}
                options={{
                    title: 'Contact',
                }}
            />
            <Stack.Screen
                name="Courses"
                component={Courses}
                options={{
                    title: 'Courses',
                }}
            />
        </Stack.Navigator>
    )
}

export default AboutStack