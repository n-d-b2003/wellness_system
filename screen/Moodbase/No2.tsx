import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
const Stack = createNativeStackNavigator();

const No2 = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Text style={styles.question}>Are you excited to prioritize your health today? When it comes to walking, where will you be strolling to enjoy your workout?</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Yes3')}
        >
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('No3')}
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

export default No2;
