import { View, Text, TouchableOpacity, Image, TextInput, ImageBackground} from 'react-native'
import React, { useState } from 'react'
// import { themeColors } from './Theme'
import { useNavigation } from '@react-navigation/native'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen(){
  const [Email,setEmail]=useState('')
  const [password,setPassword] = useState('')
  const navigation = useNavigation();
  return (
   <ImageBackground
   source={require("../../data/images/welcome.jpg")}
    style={{
    flex:1,
 }}
   >
     <View style={{
       flex:1,
      }}>
      <SafeAreaView  
      style={{
        flex:1,
      }}
      >
        <View 
        style={{
          flexDirection:"row",
          justifyContent:'flex-start',
         }}>
          <TouchableOpacity onPress={()=> navigation.goBack()} 
            style={{
            padding: 8,                  
            borderTopRightRadius: 20,    
            borderBottomLeftRadius: 20,  
            marginLeft: 20,
            marginTop:20,
          }}
          >
            <ArrowLeftIcon size="20" color="white" />
          </TouchableOpacity>
        </View>
        <View  
        style={{
          flexDirection:"row",
          justifyContent:'center'
        }}
        >
        </View>
        
        
      </SafeAreaView>
      <View 
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50,
        flex:2.5,        
        paddingHorizontal: 32, 
        paddingTop: 32,
      }} 
         >
          <View
          style={{
            marginTop:8,
            marginBottom:8,
          }}
          >
            <Text 
            style={{
              color: 'white',
              marginLeft: 16,
              fontWeight:"bold",
            }}
            >Email Address</Text>
            <TextInput 
              style={{
                padding: 15, 
                backgroundColor: '#F3F4F6', 
                borderRadius: 20, 
                marginBottom: 12, 
                color: '#4A5568',           
              }}
              placeholder="email"
               onChangeText={(text)=>setEmail(text)}
            />
            <Text 
            style={{
              color: 'white',
              marginLeft: 16,
              fontWeight:"bold",
            }}>Password</Text>
            <TextInput 
              style={{
                padding: 13,               
                backgroundColor: '#F3F4F6',
                borderRadius: 20,      
                color:'#4A5568',  
                marginBottom:25, 
              }}
              secureTextEntry
              placeholder="password"
              onChangeText={(text)=>setPassword(text)} 
            />
            <TouchableOpacity onPress={()=> navigation.navigate('Home')}
            style={{
                      
            }}>
              <Text 
              style={{
                    fontSize:16,
                    fontWeight: '600', 
                    color: '#F59E0B',  
                    alignContent:"flex-start"        
              }}>Forgot Password?</Text>
            </TouchableOpacity>

            
            <TouchableOpacity 
            onPress={()=> navigation.navigate('Home')}
              style={{
                marginTop:20,
                paddingVertical: 3, 
                backgroundColor: '#FFD700',
                borderRadius: 10,
              }}>
                <Text 
                style={{
                  paddingTop:5,
                  fontSize: 20,
                  fontWeight: 'bold', 
                  textAlign: 'center', 
                  color: '#4A5568',
                }}>
                        Login
                </Text>
             </TouchableOpacity>
            
          </View>
          <Text 
          style={{
            fontSize: 20,      
            color: '#4A5568',  
            fontWeight: 'bold',
            textAlign: 'center',
            paddingVertical: 20,
          }}>Or</Text>
          <View //className="flex-row justify-center space-x-12"
          style={{
            flexDirection: 'row',    
            justifyContent: 'center',
            marginHorizontal: -6, 
            
          }}>
            <TouchableOpacity //className="p-2 bg-gray-100 rounded-2xl"
            style={{
              marginRight:19,
              padding: 8,
              backgroundColor: '#F3F4F6', 
              borderRadius: 20,
            }}>
              <Image source={require('../../data/icons/google.png')} 
              // className="w-10 h-10"
              style={{
                width:20,
                height:20,
              }} />
            </TouchableOpacity>
            <TouchableOpacity //className="p-2 bg-gray-100 rounded-2xl"
            style={{
              marginRight:19,
              padding: 8,              
              backgroundColor: '#F3F4F6', 
              borderRadius: 20,             
            }}>
              <Image source={require('../../data/icons/apple.png')} //className="w-10 h-10"
              style={{
                width:20,
                height:20,
              }} />
            </TouchableOpacity>
            <TouchableOpacity //className="p-2 bg-gray-100 rounded-2xl"
            style={{
              marginRight:19,
              padding: 8,              
              backgroundColor: '#F3F4F6', 
              borderRadius: 20,             
            }}
            >
              <Image source={require('../../data/icons/facebook.png')} //className="w-10 h-10"
              style={{
                width:20,
                height:20,
              }} />
            </TouchableOpacity>
          </View>
          <View //className="flex-row justify-center mt-7"
          style={{
            flexDirection:"row",
            justifyContent:"center",
            marginTop:7,
          }}>
              <Text //className="text-gray-500 font-semibold"
              style={{
                color: '#6B7280', 
                fontWeight: '600',         
              }}>
                  Don't have an account?
              </Text>
              <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                  <Text //className="font-semibold text-yellow-500"
                  style={{
                    fontWeight: '600', 
                    color: '#F59E0B',  
                    marginLeft:5,             
                  }}
                  > Sign Up</Text>
              </TouchableOpacity>
          </View>
          
      </View>
    </View>
   </ImageBackground>
    
  )
}

