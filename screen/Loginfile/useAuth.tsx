// import { View, Text } from 'react-native'
// import React,{useState, useEffect} from 'react'
// import { onAuthStateChanged } from 'firebase/auth'
// import { auth } from '../../FirebaseConfig'

// export default function useAuth(){
  
//     const [user, setUser] = useState(null)

//     useEffect( ()=> {
//         const unsub = onAuthStateChanged(auth, (authUser) =>{
//             console.log('got user: ',authUser)
//             if(authUser){
//                 setUser(authUser)
//             }
//             else{
//                 setUser(null)
//             }
//         })
//         return () =>{
//             unsub()
//         }
//     },[])
//     return(user);
// }

