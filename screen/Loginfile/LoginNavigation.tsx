import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Homepage/HomeScreen';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import FitnessMainPage from '../Homepage/FitnessMainPage';
import DietMainPage from '../Homepage/DietMainPage';
import Recovery from '../Homepage/Recovery';
// import Home1 from '../weigthsection/Home1';
// import WorkoutScreen from '../weigthsection/WorkoutScreen';
// import Weigthtraining from '../weigthsection/Weigthtraining';
// import Resting from '../weigthsection/Resting';
//  import StackNavigator from '../weigthsection/StackNavigator';

const Stack = createNativeStackNavigator();

export default function LoginNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Navigator" component={NavigatorScreen} />
        <Stack.Screen name="AI" component={AIScreen} /> */}
        <Stack.Screen name="FitnessMains" options={{headerShown: false}} component={FitnessMainPage} />
        <Stack.Screen name="Diet" options={{headerShown: false}} component={DietMainPage} />
        <Stack.Screen name="Recovery" options={{headerShown: false}} component={Recovery} />
        {/* <Stack.Screen name="Home1" component={Home1} options={{headerShown:false}}/>
        <Stack.Screen name="Workout1" component={WorkoutScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Weigth1" component={Weigthtraining} options={{headerShown:false}}/>
        <Stack.Screen name="Rest1" component={Resting} options={{headerShown:false}} />     */}
        {/* <Stack.Screen name="stacknavi" component={StackNavigator} options={{headerShown:false}}/>  */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}