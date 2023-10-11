import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, {useContext} from 'react'
import Cards from '../../workout/Cards'
import { FitnessItems } from './Weigthcontext'

const Home1 = () => {
  const {
    workout,
    calories,
    minutes,} = useContext(FitnessItems)
  return (
       <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:50,flex:1}}>
           <View 
          style={{
            backgroundColor:"black",   //home screen background color orange
            padding:10,
            // height:200,
            width:"100%",
            }}
            >
              <Text style={{color:"white",fontWeight:"bold",fontSize:20,marginTop:30}}>
                HOME WORKOUT
              </Text>

            <View 
            style={{
              flexDirection:"row",
              alignItems:"center",
              justifyContent:"space-between",
              marginTop:20}}>
              <View>
                <Text 
                style={{
                  textAlign:"center", 
                  fontWeight:"bold",
                  color:"white",
                  fontSize:18,
                  }}>{workout}</Text>
                <Text style={{color:"#D0D0D0",fontSize:17,marginTop:6}}>WORKOUTS</Text>
              </View>
                
              <View>
                <Text
                style={{
                  textAlign:"center", 
                  fontWeight:"bold",
                  color:"white",
                  fontSize:18,
                  }}>{calories}</Text>
                <Text style={{color:"#D0D0D0",fontSize:17,marginTop:6}}>KCAL</Text>
              </View>

              <View>
                <Text
                style={{
                  textAlign:"center", 
                  fontWeight:"bold",
                  color:"white",
                  fontSize:18,
                  }}>{minutes}</Text>
                <Text style={{color:"#D0D0D0",fontSize:17,marginTop:6}}>MINS</Text>
              </View>
            </View>
          
          <View style={{justifyContent:"center", alignItems:"center"}}>
          <Image 
          // resizeMode='contain'
          style={{
            width:"90%", 
            height:120, 
            marginTop:20, 
            borderRadius:7,
          }}
          
          source={{
            uri:"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png"}} />
          </View>
          <Cards/>
          </View>
      </ScrollView>
   
  )
}

export default Home1

const styles = StyleSheet.create({})
