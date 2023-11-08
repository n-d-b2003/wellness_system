import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { FitnessContext } from './screen/weigthsection/Weigthcontext';
import React,{ useEffect, useState } from 'react';
import LoginNavigation from './screen/Loginfile/LoginNavigation';
import { usePushNotifications } from './userPushNotification';
import JoggingHome from './screen/jogging/JoggingHome';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';      
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import Warmupworkout from './screen/Body workout/Warmupworkout';

export default function App(){
  const { expoPushToken } = usePushNotifications()
  console.log(expoPushToken)

return (
  // <Warmupworkout/>
   <FitnessContext>
         <LoginNavigation/>
     </FitnessContext>
      // <JoggingHome/>
  );
}

