import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Home1 from './screen/weigthsection/Home1';
import StackNavigator from './screen/weigthsection/StackNavigator';
import { FitnessContext } from './screen/weigthsection/Weigthcontext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React,{ useEffect, useState } from 'react';
import LoginNavigation from './screen/Loginfile/LoginNavigation';


export default function App(){
  
return (
      
     <LoginNavigation/>
      // <FitnessContext>
      //    <StackNavigator/>
      //   </FitnessContext>
  );
}

