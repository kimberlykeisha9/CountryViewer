import React, { useState } from 'react'
import HomeScreen from './src/screens/HomeScreen'
import CountryScreen from './src/screens/CountryScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ title: 'Where in the world?' }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Country"
          options={{ title: 'Where in the world?' }}
          component={CountryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
