import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../Feature/Home/Home'
import About from '../Feature/About/About'

const Stack = createStackNavigator ()

export default function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="About" component={About}/>
        </Stack.Navigator>
    )
}
