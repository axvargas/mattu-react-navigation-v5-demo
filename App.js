import React from 'react'
import {
	SafeAreaView,
	StyleSheet,
	StatusBar,
} from 'react-native';
import Navigation from './src/navigation/Navigation'
import { NavigationContainer } from '@react-navigation/native'


const App = () => {
	return (
		<>
			<NavigationContainer>
				<StatusBar backgroundColor='#fff' barStyle='dark-content' />
				<Navigation />
			</NavigationContainer>
		</>
	)
}

const styles = StyleSheet.create({

})

export default App
