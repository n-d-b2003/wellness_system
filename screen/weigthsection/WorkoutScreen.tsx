import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, ScrollView} from 'react-native'
import React,{ useContext } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { FitnessItems } from './Weigthcontext';
import { AntDesign } from '@expo/vector-icons';

const WorkoutScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const {
    completed,
    setCompleted,
     } = useContext(FitnessItems)

  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:"white", marginTop:50}}>
      <Image 
      style={{width: "100%", height:170}} 
      source={{uri: route.params.image }}
      />

      <Ionicons 
      onPress={() => navigation.goBack()}
      style={{
        position:"absolute",top:50,left:20,
      }}
      name="arrow-back-outline" 
      size={24} 
      color="white" 
      />   

      {route.params.exercise1.map((item, index) =>(
        <Pressable 
        style={{margin:10, flexDirection:"row", alignItems:"center"}}
        key={index}>
          <Image style={{width:90, height:90}} source={{uri:item.image}}/>
        
        <View style={{marginLeft:10}}>
          <Text style={{
            fontSize:17,
            fontWeight:"bold",
            width:170,
            }}>{item.name}</Text>

          <Text style={{
            marginTop:4,
            fontSize:16,
            color:"gray", 
          }}
          >x{item.sets}</Text>
        </View>
        
          {completed.includes(item.name) ?(
            <AntDesign style={{marginLeft:40}}name="checkcircle" size={24} color="green" />
          ): (
            null
          )}

        </Pressable>
        ))}

    </ScrollView>

    <Pressable 
    onPress={() => {
      navigation.navigate("Weigth1",{
        exercise1:route.params.exercise1,
    })
    setCompleted([])
    }}
    style={{
      backgroundColor:"blue", 
      padding:10,
      marginLeft:"auto",
      marginRight:"auto",
      marginVertical:20,
      width:120,
      borderRadius:6,
      }}>
      <Text style={{
        textAlign:"center",
        color:"white",
        fontSize:15,
        fontWeight:"600"
      }}>START</Text>
    </Pressable>
    </>
  )
}

export default WorkoutScreen

const styles = StyleSheet.create({})