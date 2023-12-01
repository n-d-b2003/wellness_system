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
import Home1 from '../weigthsection/Home1';
import WorkoutScreen from '../weigthsection/WorkoutScreen';
import Weigthtraining from '../weigthsection/Weigthtraining';
import Resting from '../weigthsection/Resting';
import { FitnessContext } from '../weigthsection/Weigthcontext';
import Moodbase from '../Homepage/Moodbase';
import Yes1 from '../Moodbase/Yes1';
import No1 from '../Moodbase/No1';
import Yes2 from '../Moodbase/Yes2';
import No2 from '../Moodbase/No2';
import Yes3 from '../Moodbase/Yes3';
import No3 from '../Moodbase/No3';
import No4 from '../Moodbase/No4';
import Yes4 from '../Moodbase/Yes4';
import Yes5 from '../Moodbase/Yes5';
import No5 from '../Moodbase/No5';
import Yes6 from '../Moodbase/Yes6';
import No6 from '../Moodbase/No6';
import Warmupworkout from '../Body workout/Warmupworkout';
import Form from '../Model/Form';

const Stack = createNativeStackNavigator();

const LoginNavigation = () => {
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
        <Stack.Screen name='Form' options={{headerShown:false}} component={Form} />
        {/* moodbase */}
        <Stack.Screen name='Moodbase' options={{headerShown:false}} component={Moodbase}/>
        <Stack.Screen name='Yes1' options={{headerShown:false}} component={Yes1}/>
        <Stack.Screen name='No1' options={{headerShown:false}} component={No1}/>
        <Stack.Screen name='Yes2' options={{headerShown:false}} component={Yes2}/>
        <Stack.Screen name='No2' options={{headerShown:false}} component={No2}/>
        <Stack.Screen name='Yes3' options={{headerShown:false}} component={Yes3}/>
        <Stack.Screen name='No3' options={{headerShown:false}} component={No3}/>
        <Stack.Screen name='Yes4' options={{headerShown:false}} component={Yes4}/>
        <Stack.Screen name='No4' options={{headerShown:false}} component={No4}/>
        <Stack.Screen name='Yes5' options={{headerShown:false}} component={Yes5}/>
        <Stack.Screen name='No5' options={{headerShown:false}} component={No5}/>
        <Stack.Screen name='Yes6' options={{headerShown:false}} component={Yes6}/>
        <Stack.Screen name='No6' options={{headerShown:false}} component={No6}/>
        <Stack.Screen name='Warmupwork' options={{headerShown:false}} component={Warmupworkout}/>

        {/* workout navigation */}
        <Stack.Screen name="Home1" component={Home1} options={{headerShown:false}}/>
        <Stack.Screen name="Workout1" component={WorkoutScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Weigth1" component={Weigthtraining} options={{headerShown:false}}/>
        <Stack.Screen name="Rest1" component={Resting} options={{headerShown:false}} /> 
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default LoginNavigation;