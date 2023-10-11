import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home1 from './Home1'
import WorkoutScreen from './WorkoutScreen'
import Resting from './Resting'
import Weigthtraining from './Weigthtraining'
import { FitnessContext } from './Weigthcontext'
import LoginNavigation from '../Loginfile/LoginNavigation'
const StackNavigator = () => {
    const Stack=createNativeStackNavigator()
  return (
    <NavigationContainer>
      {/* <FitnessContext> */}
          <Stack.Navigator>
              <Stack.Screen name="Home1" component={Home1} options={{headerShown:false}}/>
              <Stack.Screen name="Workout1" component={WorkoutScreen} options={{headerShown:false}}/>
              <Stack.Screen name="Weigth1" component={Weigthtraining} options={{headerShown:false}}/>
              <Stack.Screen name="Rest1" component={Resting} options={{headerShown:false}} />   
         </Stack.Navigator>
    {/* </FitnessContext> */}
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})