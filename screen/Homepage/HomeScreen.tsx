import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Image, Text, StyleSheet, TouchableOpacity ,ScrollView, TextInput, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import { themeColors } from '../Loginfile/Theme';

import FitnessMainPage from './FitnessMainPage';
import DietMainPage from './DietMainPage';
import Recovery from './Recovery';
const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <Image
          source={require('../../data/images/profile.jpeg')}
          style={{
            height:50,
            width:50,
            borderRadius:25,
          }}
          />
          <Text
          style={
            {
            flexDirection:"row",
            textTransform: "capitalize",
            color:"white",
            marginLeft:10,
            marginTop:8,
          }
        }
        selectionColor={'white'}
          >Hello, Welcome</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('Navigator')}>
          <Ionicons name="notifications" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View
          style={{
            backgroundColor: '#696969',
            paddingVertical: 8,
            paddingHorizontal: 10,
            borderRadius: 8,
            marginVertical: 24,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal:20,
          }}
        >
          <Ionicons name='search-outline' size={24} color={"white"} />
          <TextInput
            placeholder='Search Workouts..'
            placeholderTextColor={"white"}
            style={{
              fontSize: 18,
              width: "70%",
              color:'white',
              marginLeft: 10,
            }}
          />
          <Ionicons name='options-outline' style={{backgroundColor:"#D3D3D3",borderRadius:5,padding:8,}} size={24} color={"black"}/>
        </View>

        <View style={styles.modulesContainer}>
                
        <TouchableOpacity
          style={[styles.module,{ backgroundColor: '#F5F5F5' }]}
          onPress={() => navigation.navigate('AI')}
        > 
        <ImageBackground
              source={require('../../data/images/ai.jpg')}
              resizeMode="stretch"
              style={{
                flex: 1,
                justifyContent: 'space-between',
                width:"100%",
                height:"100%",
                alignSelf:"center",
              }}
            >      
          <Text style={styles.moduleText}>AI</Text>
          </ImageBackground> 
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.module, { backgroundColor: '#F5F5F5' }]}
          onPress={() => navigation.navigate('FitnessMains')}
        >
          <ImageBackground
              source={require('../../data/images/fitness_background.jpg')}
              style={{
                flex: 1,
                justifyContent: 'space-between',
                width:"100%",
                height:"100%",
                alignContent: 'center',
              }}
            >
          <Text style={styles.moduleText}>Physical</Text>
          </ImageBackground> 
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.module, { backgroundColor: '#F5F5F5' }]}
          onPress={() => navigation.navigate('Diet')}
        >
          <ImageBackground
              source={require('../../data/images/diet_background.jpg')}
              style={
                {
                  flex: 1,
                  justifyContent: 'space-between',
                  width:"100%",
                  height:"100%",
                  alignContent: 'center',
                }
              }
            >
          <Text style={styles.moduleText}>Diet</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.module, { backgroundColor: '#F5F5F5' }]}
          onPress={() => navigation.navigate('Recovery')}
        >
          <ImageBackground
              resizeMode="stretch"
              source={require('../../data/images/recovery_background.jpg')}
              style={{
                flex: 1,
                justifyContent: 'space-between',
                width:"100%",
                height:"100%",
                alignContent: 'center',
              }}
            >
          <Text style={styles.moduleText}>Relax</Text>
          </ImageBackground>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    flex: 1,
    backgroundColor: "black",
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    color:'white',
  },
 
  modulesContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent:'center',
    marginBottom:12,
  },
  // moduleImage: {
  //   flex: 1,
  //   justifyContent: 'space-between',
  //   alignContent: 'center',
  //   flexDirection:'row',
  //   marginBottom:12,
  //   resizeMode:"cover",
  // },
  module: {
    width: "100%",
    height:320,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    borderRadius: 10,
    overflow:'hidden',
  },
  moduleText: {
    fontWeight:'600',
    color: 'white',
    alignSelf:"center",
    fontSize:20,
  },
});

export default HomeScreen;

