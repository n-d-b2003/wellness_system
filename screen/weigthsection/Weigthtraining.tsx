import { StyleSheet, Text, View, Image, Pressable} from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FitnessItems } from "./Weigthcontext"

const Weigthtraining = () => {
    const route = useRoute()
    // console.log(route.params)
    const navigation = useNavigation()
    const [index,setIndex] = useState(0)
    const exercise = route.params.exercise1
    const current = exercise[index]
    // console.log(current)
    const {completed,
        setCompleted,
        workout,
        setWorkout,
        calories,
        setCalories,
        minutes,
        setMinutes} = useContext(FitnessItems)
    //  console.log(completed,"array")
  return (
    <SafeAreaView>
        <Image 
        style={{width:"100%", height:370}} 
        source={{uri:current.image}}
        />

        <Text 
        style={{
            marginLeft:"auto", 
            marginRight:"auto",
            marginTop:30,
            fontSize:30,
            fontWeight:"bold",
        }}
        >
            {current.name}
        </Text>

        <Text 
        style={{
            marginLeft:"auto", 
            marginRight:"auto",
            marginTop:30,
            fontSize:38,
            fontWeight:"bold",
        }}
        >
            x{current.sets}
        </Text>


        {index + 1 >= exercise.length ?(
        <Pressable
        onPress={() => {
            navigation.navigate("Home1")
        }}
        style={{
            backgroundColor:"blue",
            marginLeft:"auto",
            marginRight:"auto",
            marginTop:30,
            borderRadius:20,
            padding:10,
            width:150,
        }}>
            <Text
            style={{
                textAlign:"center",
                fontWeight:"bold",
                fontSize:20,
                color:"white",
            }}
            >DONE</Text>
        </Pressable>

        ) : (
        <Pressable
        onPress={() => {
            navigation.navigate("Rest1")
            setCompleted([...completed,current.name])
            setWorkout(workout+1)
            setMinutes(minutes+2.5)
            setCalories(calories+6.30)
            setTimeout(() =>{
                setIndex(index+1)
            },2000)
        }}
        style={{
            backgroundColor:"blue",
            marginLeft:"auto",
            marginRight:"auto",
            marginTop:30,
            borderRadius:20,
            padding:10,
            width:150,
        }}>
            <Text
            style={{
                textAlign:"center",
                fontWeight:"bold",
                fontSize:20,
                color:"white",
            }}
            >DONE</Text>
        </Pressable>
         )}
        

        <Pressable 
        disabled = {index === 0}
        onPress={() => {
            navigation.navigate("Rest1")

            setTimeout(() =>{
                setIndex(index-1)
            },2000)
        }}
        style={{
            flexDirection:"row",
            alignItems:"center",
            marginLeft:"auto",
            marginRight:"auto",
            marginTop:50,
            }}>
            <Pressable
            style={{
                backgroundColor:"green",
                padding:10,
                borderRadius:20,
                marginHorizontal:20,
                width:100,
            }}
            >
                <Text style={{
                    color:"white",
                    fontWeight:"bold",
                    textAlign:"center",
                }}
                >PREV</Text>
            </Pressable>
            {index+1 >= exercise.length?(
            <Pressable
                onPress={() => {
                    navigation.navigate("Home1")
                }}
                style={{
                    backgroundColor:"green",
                    padding:10,
                    borderRadius:20,
                    marginHorizontal:20,
                    width:100,
                }}
                >
                    <Text
                    style={{
                        color:"white",
                        fontWeight:"bold",
                        textAlign:"center",
                    }}
                    >SKIP</Text>
                </Pressable>
            )
            :(
            <Pressable
            onPress={() => {
                navigation.navigate("Rest1")
    
                setTimeout(() =>{
                    setIndex(index+1)
                },2000)
            }}
            style={{
                backgroundColor:"green",
                padding:10,
                borderRadius:20,
                marginHorizontal:20,
                width:100,
            }}
            >
                <Text
                style={{
                    color:"white",
                    fontWeight:"bold",
                    textAlign:"center",
                }}
                >SKIP</Text>
            </Pressable>
            )}
            
        </Pressable>

    </SafeAreaView>
  )
}

export default Weigthtraining

const styles = StyleSheet.create({})