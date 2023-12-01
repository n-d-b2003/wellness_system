import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { FitnessContext } from './screen/weigthsection/Weigthcontext';
import React,{ useEffect, useState } from 'react';
import LoginNavigation from './screen/Loginfile/LoginNavigation';
import JoggingHome from './screen/jogging/JoggingHome';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';      
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import Index from './screen';
export default function App(){
return (
  // <Index/>
  // <Normal/>
   <FitnessContext>
         <LoginNavigation/>
     </FitnessContext>
      // <JoggingHome/>
  );
}

