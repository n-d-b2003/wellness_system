import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Homepage/HomeScreen';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import FitnessMainPage from '../Homepage/FitnessMainPage';
import DietMainPage from '../Homepage/DietMainPage';
import Recovery from '../Homepage/Recovery';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../FirebaseConfig';

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();
export default function LoginNavigation() {
  const [user, setUser] = useState<User | null>(null);
  useEffect (  () => {
    onAuthStateChanged(FIREBASE_AUTH, (user) =>{
      console.log('user',user);
      setUser(user)
    })
  },[])



  return (
    <NavigationContainer > 
      <Stack.Navigator initialRouteName='Welcome' >
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
        <Stack.Screen name="FitnessMains" options={{headerShown: false}} component={FitnessMainPage} />
        <Stack.Screen name="Diet" options={{headerShown: false}} component={DietMainPage} />
        <Stack.Screen name="Recovery" options={{headerShown: false}} component={Recovery} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}