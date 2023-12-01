import { View, Text, TouchableOpacity, Image, TextInput, KeyboardAvoidingView,ActivityIndicator, ImageBackground  } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../FirebaseConfig';

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [name,setName ]= useState('')
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [loading,setLoading] = useState(false)
  const auth = FIREBASE_AUTH

  const signUp = async () =>{
    setLoading(true)
    try{
        const response = await createUserWithEmailAndPassword(auth,email,password)
        console.log(response);
      alert("Check your emails")
    }catch (error:any){
      console.log(error);
      alert('sign in failed: '+error.message)
    }finally{
      setLoading(false);
    }
  }

  return (
<ImageBackground
 source={require("../../data/images/welcome.jpg")}
 style={{
  flex:1,
 }}
 >
    <View 
     style={{
        flex:1,
        }}>
      <SafeAreaView 
      style={{
        flex:1
        }}>
        <View 
         style={{flexDirection:"row",justifyContent:"flex-start"}}>
            <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                style={{
                    padding: 8, 
                    borderTopRightRadius: 20, 
                    borderBottomLeftRadius: 20, 
                    marginLeft: 16,
                    marginTop:20, 
                }}
            >
                <ArrowLeftIcon size="20" color="white" />
            </TouchableOpacity>
        </View>
        <View 
        style={{flexDirection:"row",justifyContent:"center"}}>  
        </View>
      </SafeAreaView>
      <View 
      style={{borderTopLeftRadius: 50, 
            borderTopRightRadius: 50,
            flex:2,    
            paddingHorizontal: 8,    
            paddingTop: 8,}}
      >
        <KeyboardAvoidingView>
        <View 
        style={{
            marginTop:8,
            marginBottom:8,
        }}>
            <Text 
            style={{
                color:"white",
                marginLeft:16,
                fontSize:15,
                fontWeight:"bold",
            }}>Full Name</Text>
            <TextInput
                style={{
                    padding: 10, 
                    backgroundColor: '#F3F4F6', 
                    borderRadius: 20, 
                    marginBottom: 12,
                    color:"#4A5568"
                }}
                autoCapitalize="none"
                onChangeText={(text) => setName(text)}
                placeholder=' Name'
            />
            <Text 
            style={{
                color: 'white', 
                marginLeft: 16,
                fontSize:15,
                fontWeight:"bold",
            }}
            >Email Address</Text>
            <TextInput
                style={{
                    padding: 10, 
                    backgroundColor: '#F3F4F6', 
                    borderRadius: 20, 
                    marginBottom: 12, 
                    color: '#4A5568',
                }}
                autoCapitalize="none"
                onChangeText={(text) => setEmail(text)}
                placeholder='Enter Email'
            />
            <Text 
            style={{
                color: 'white', 
                marginLeft: 16,
                fontSize:15,
                fontWeight:"bold",
            }}
            >Password</Text>
            <TextInput
                style={{
                    padding: 10, 
                    backgroundColor: '#F3F4F6', 
                    borderRadius: 20, 
                    marginBottom: 19, 
                    color: '#4A5568',
                }}
                secureTextEntry
                autoCapitalize="none"
                onChangeText={(text) => setPassword(text)}
                placeholder='Enter Password'
            />
            {loading ? (
                <ActivityIndicator />
            ):
            (
                <TouchableOpacity
                onPress={signUp}
                style={{

                    paddingVertical: 12, 
                    backgroundColor: '#FFD700', 
                    borderRadius: 20,
                    
                }}
            >
                <Text 
                style={{
                    fontSize: 20, 
                    fontWeight: 'bold', 
                    textAlign: 'center', 
                    color: 'black', 
                }}>
                    Sign Up
                </Text>
            </TouchableOpacity>
            )}

            
        </View>
        </KeyboardAvoidingView>
        <Text 
        style={{
            fontSize: 20, 
            color: 'white', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            paddingVertical: 20,
        }}>
            Or
        </Text>
        <View 
        style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginHorizontal: 12,
        }}>
            <TouchableOpacity 
            style={{
                padding: 7, 
                backgroundColor: '#F3F4F6',
                borderRadius: 20,
                marginRight:10,
            }}
            >
            <Image source={require('../../data/icons/google.png')} 
                    style={{
                        width: 40, 
                        height: 40,
                    }} />
            </TouchableOpacity>
            <TouchableOpacity 
            style={{
                padding: 7, 
                backgroundColor: '#F3F4F6',
                borderRadius: 20,
                marginRight:10,
            }}
            >
                <Image source={require('../../data/icons/apple.png')} 
                    style={{
                        width: 40, 
                        height: 40,
                    }}
                    />
            </TouchableOpacity>
            <TouchableOpacity 
            style={{
                padding: 7, 
                backgroundColor: '#F3F4F6',
                borderRadius: 20,
            }}
            >
                <Image source={require('../../data/icons/facebook.png')} 
                    style={{
                        width: 40, 
                        height: 40,
                    }}
                    />
            </TouchableOpacity>
        </View>
        <View  
        style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 28,
        }}
        >
            <Text 
            style={{
                color: 'white', 
                fontWeight: '600',
                fontSize:15,
            }}>Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                <Text
                style={{
                    fontWeight: '600',
                    color: '#F59E0B',
                    fontSize:15,
                }}
                > Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>


 </ImageBackground>
    
  )
}
