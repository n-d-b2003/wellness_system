import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
const Stack = createNativeStackNavigator();

const No5 = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Text style={styles.question}>
Would you like to take a revitalizing 30-minute power nap to re-energize and refresh?</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Yes6')}
        >
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('No6')}
        >
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    fontSize: 24, 
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    margin: 10,
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


export default No5;
