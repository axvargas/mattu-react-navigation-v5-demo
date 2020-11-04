import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const About = ({ navigation }) => {
    return (
        <View>
            <Text>About</Text>
            <Button
                title="Go to Contact"
                onPress={() => navigation.navigate('Contact')}
            />
        </View>
    )
}

export default About

const styles = StyleSheet.create({})
