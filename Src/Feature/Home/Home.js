import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Home = (props) =>
{
    const actionMoveAbout = () => 
    {
        props.navigation.navigate('About')
    }
    return (
        <View>
            <Text>Home</Text>
            <TouchableOpacity onPress={actionMoveAbout}><Text>Move To About</Text></TouchableOpacity>
        </View>
      )
}
export default Home