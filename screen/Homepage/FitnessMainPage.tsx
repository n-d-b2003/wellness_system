import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you are using Expo for vector icons
import { useNavigation } from '@react-navigation/native';
// import { FitnessContext } from '../weigthsection/Weigthcontext';
import { FitnessContext } from '../weigthsection/Weigthcontext';
const FitnessMainPage = () => {
  const navigation = useNavigation()

  return (
    
    <ScrollView style={styles.container}>
      <View><Text style={styles.headerTitle}>Physical Workout</Text></View>
      <View style={styles.modulesContainer}>
        

      <TouchableOpacity style={styles.module}
      onPress={ ()=>navigation.navigate('WarmupHome')}
      >
        <ImageBackground
              resizeMode='stretch'
              source={require('../../data/images/warmup_image.jpg')}
              style={styles.moduleImage}
            >
          <Text style={styles.moduleText}>warmup</Text>
        </ImageBackground>
        </TouchableOpacity>

      <TouchableOpacity style={styles.module}>
        <ImageBackground
              resizeMode="cover"
              source={require('../../data/images/walking.jpg')}
              style={styles.moduleImage}
            >
          <Text style={styles.moduleText}>Walking</Text>
        </ImageBackground>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.module}>
        <ImageBackground
              resizeMode='cover'
              source={require('../../data/images/running_image.jpg')}
              style={styles.moduleImage}
            >
          <Text style={styles.moduleText}>Jogging</Text>
        </ImageBackground>
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.module}>
        <ImageBackground
              resizeMode='cover'
              source={require('../../data/images/endurance_image.jpg')}
              style={styles.moduleImage}
            >
          <Text style={styles.moduleText}>Endurance</Text>
        </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={styles.module}
        onPress={ ()=>navigation.navigate('Home1')
         
      }>
        <ImageBackground
              source={require('../../data/images/strength_image.jpg')}
              style={styles.moduleImage}
            >
          <Text style={styles.moduleText}>Strength</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={styles.module}>
        <ImageBackground
              source={require('../../data/images/Balance_image.jpg')}
              style={styles.moduleImage}
            >
           <Text style={styles.moduleText}>Balance</Text>
           </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={styles.module}>
        <ImageBackground
              source={require('../../data/images/flexibility_image.jpg')}
              style={styles.moduleImage}
            >
          <Text style={styles.moduleText}> Flexibility</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",  
    padding: 10,
    marginTop:20,
    flexDirection: "column",
  },
  headerTitle: {
    marginTop:30,
    fontSize: 20,
    color:"white",
    fontWeight: 'bold',
    alignSelf:"center",
    marginBottom:40,
    flexDirection:"column",
  },
  modulesContainer: {
    flexDirection: "row",
    flexWrap: 'wrap',
    alignContent:'center',
    marginTop:15,
    marginBottom:12,
  },
  moduleImage: {
    flex: 1,
    justifyContent: 'space-between',
    width: "90%",
    height: "90%",
    alignContent: 'center',
  },
  module: {
    width: '50%',
    aspectRatio: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  moduleText: {
    color: 'white',  
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:"center",
  },
});

export default FitnessMainPage;
