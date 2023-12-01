import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const No1 = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Text style={styles.question}>How would you like to invigorate your day: with a refreshing jog or a leisurely walk? The choice is yours!</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Yes2')}
        >
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('No2')}
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

export default No1;
