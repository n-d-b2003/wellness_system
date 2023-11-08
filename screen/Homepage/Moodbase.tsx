import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
const Stack = createNativeStackNavigator();

const Moodbase = ({ navigation }) => {
  return (
    <ImageBackground
    source={require("../../data/images/images1quote.jpg")}
    resizeMode="stretch"
    style={{
      
    flex:1,

 }}
    >
    <View style={styles.container}>
      <Text style={styles.question}>Start the workout?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Yes1')}
        >
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('No1')}
        >
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    fontSize: 30,
    color:"white", 
    marginBottom: 20,
    textAlign: 'center',
    fontWeight:"bold",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    margin: 30,
    padding: 20, 
    borderWidth: 2, 
    borderColor: 'dodgerblue', 
    borderRadius: 10, 
    backgroundColor: 'white', 
    width: 120, 
    alignItems: 'center', 
    elevation: 2, 
  },
  buttonText: {
    fontSize: 18,
    color: 'dodgerblue',
  },
  selected: {
    backgroundColor: 'lightblue', 
  },
});

export default Moodbase;
