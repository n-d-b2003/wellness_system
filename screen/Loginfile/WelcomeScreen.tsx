import { View, Text, Image, TouchableOpacity, ImageBackground, Dimensions  } from 'react-native'
import React from 'react'
// import { themeColors } from './Theme';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'react-native-svg';

export default function WelcomeScreen() {
  const navigation = useNavigation()
  const {} = Dimensions.get("window")
return (
 <ImageBackground
 source={require("../../data/images/welcome.jpg")}
 style={{
  flex:1,
 }}
 >


<SafeAreaView  style={{flex:1}}>
    
    <View  style={{flex:1,justifyContent:"space-around",alignItems:"center",}}>
        <Text 
            style={{color:"white",fontSize:30,fontWeight:"bold",textAlign:"center"}}>
            Let's Get Started!
        </Text>
        <View 
        style={{marginBottom:4,marginTop:4}}>
            <TouchableOpacity
                onPress={()=> navigation.navigate('SignUp')}
                style={{
                  paddingVertical: 3, 
                  paddingHorizontal: 7, 
                  backgroundColor: '#FFD700', 
                  borderRadius: 10
                }}>
                    <Text 
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold', 
                      textAlign: 'center', 
                      color: '#4A5568',
                    }}
                    >
                        Sign Up
                    </Text>
            </TouchableOpacity>
            <View 
            style={{flexDirection:"row",justifyContent:"center"}}>
                <Text 
                  style={{
                    color:"white",
                  fontWeight:"600",
                  fontSize:16,
                  marginTop:10,
                  }}>Already have an account?</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                    <Text 
                  //   className="font-semibold text-yellow-400"
                    style={{fontSize:18,fontWeight:"900",color:"#FFD700",marginTop:10}}> Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
</SafeAreaView>

 </ImageBackground>
  
  
)
}

