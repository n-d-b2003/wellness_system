import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import bodyworkout from '../data/bodyworkout'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {useNavigation} from "@react-navigation/native"
//import {WorkoutScreen} from '../screen/WorkoutScreen'

const Cards = () => {
    const FitnessData= bodyworkout;
    const navigation = useNavigation()
  return (
    <View>
        {
            FitnessData.map((item,key) => (
                <Pressable 
                onPress={() => navigation.navigate("Workout1",{image:item.image,
                    exercise1:item.exercise1,id:item.id,})}           
                style={{
                    alignItems:"center", 
                    justifyContent:"center", 
                    margin:10,
                    paddingTop:10,
                    }} 
                key={key}
                >
                    <Image 
                    style={{width:"95%", height:140, borderRadius:7}}  
                    source={{uri:item.image}}
                    />
                    <Text style=
                    {{
                        position:"absolute",
                        color:"white",
                        fontSize:16,
                        fontWeight:"bold",
                        left:20,
                        top:20,
                    }}>{item.name}</Text>
                    <MaterialCommunityIcons 
                    style={{
                        position:"absolute", 
                        color:"white",
                        bottom:15 ,
                        left:20,
                        }} 
                    name="lightning-bolt" 
                    size={24} 
                    color="black" />
                </Pressable>
            ))}
    </View>
  )
}

export default Cards

// const styles = StyleSheet.create({})