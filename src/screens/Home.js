import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Home = ({ navigation }) => {
    return (
        <View>
            <Text>Home</Text>
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
            <Button
                title="Go to Contact"
                onPress={() => navigation.navigate('Contact')}
            />
            <Button
                title="Go to Courses"
                onPress={() => navigation.navigate('About', { screen: 'Courses' })}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
