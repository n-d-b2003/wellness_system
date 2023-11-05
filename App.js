import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { FitnessContext } from './screen/weigthsection/Weigthcontext';
import React,{ useEffect, useState } from 'react';
import LoginNavigation from './screen/Loginfile/LoginNavigation';
import { usePushNotifications } from './userPushNotification';
import JoggingHome from './screen/jogging/JoggingHome';


export default function App(){
  const { expoPushToken } = usePushNotifications()
  console.log(expoPushToken)

return (
    //  <FitnessContext>
    //      <LoginNavigation/>
    //  </FitnessContext>
      <JoggingHome/>
  );
}

