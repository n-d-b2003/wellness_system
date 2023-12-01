import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const DietMainPage = () => {
  return (
   
    <ScrollView style={styles.container}>
      
      <View style={styles.modulesContainer}>
        <Text style={styles.headerTitle}>Physical Workout</Text>

        <TouchableOpacity style={styles.module}>
        <ImageBackground
              source={require('../../data/images/diet_background.jpg')}
              style={styles.moduleImage}
            >
          <Text style={styles.moduleText}>Endurance</Text>
        </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={styles.module}>
        <ImageBackground
              source={require('../../data/images/diet_background.jpg')}
              style={styles.moduleImage}
            >
          <Text style={styles.moduleText}>Strength</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={styles.module}>
        <ImageBackground
              source={require('../../data/images/diet_background.jpg')}
              style={styles.moduleImage}
            >
           <Text style={styles.moduleText}>Balance</Text>
           </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={styles.module}>
        <ImageBackground
              source={require('../../data/images/diet_background.jpg')}
              style={styles.moduleImage}
            >
          <Text style={styles.moduleText}> Flexibility</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",  
    padding: 10,
    marginTop:20,
    flexDirection: "column",
  },
  headerTitle: {
    // marginTop:30,
    fontSize: 20,
    color:"white",
    fontWeight: 'bold',
  },
  modulesContainer: {
    flexDirection: "column",
    flexWrap: 'wrap',
    alignContent:'center',
    
    marginBottom:12,
  },
  moduleImage: {
    flex: 1,
    justifyContent: 'space-between',
    width: "100%",
    height: "100%",
    alignContent: 'center',
  },
  module: {
    width: '48%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  moduleText: {
    color: 'white',  
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DietMainPage