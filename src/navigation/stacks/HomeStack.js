import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../../screens/Home'
import { Text } from 'react-native'

const Stack = createStackNavigator()

const HomeStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Home',
                    headerLeft: () => <Text onPress={navigation.openDrawer}>Menu</Text>
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeStack