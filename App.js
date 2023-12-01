import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { FitnessContext } from './screen/weigthsection/Weigthcontext';
import React,{ useEffect, useState } from 'react';
import LoginNavigation from './screen/Loginfile/LoginNavigation';
import JoggingHome from './screen/jogging/JoggingHome';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';      
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
<<<<<<< HEAD
import Index from './screen';
=======
import Warmupworkout from './screen/Body workout/Warmupworkout';

>>>>>>> d5c444c30802d86662705e4fb1f6eeae8faa8ba8
export default function App(){
return (
<<<<<<< HEAD
  // <Index/>
  // <Normal/>
=======
  // <Warmupworkout/>
>>>>>>> d5c444c30802d86662705e4fb1f6eeae8faa8ba8
   <FitnessContext>
         <LoginNavigation/>
     </FitnessContext>
      // <JoggingHome/>
  );
}

