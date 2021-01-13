import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const About = (props) =>
{
    const actionMoveHome =() =>
    {
    props.navigation.navigate ('Home')
    }
    return (
        <View>
        <Text>About</Text>
        <TouchableOpacity onPress={actionMoveHome}><Text>Move To Home</Text></TouchableOpacity>
        </View>
    ) 

    
}
export default About 