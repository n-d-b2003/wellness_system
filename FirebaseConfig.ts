// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import App from './App'; // Import your App component
<<<<<<< HEAD
=======
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

>>>>>>> d5c444c30802d86662705e4fb1f6eeae8faa8ba8

const firebaseConfig = {
  apiKey: "AIzaSyAlyk0DdGqsVp_36WH1FnalngxrHy37mG0",
  authDomain: "wellness-app-5298c.firebaseapp.com",
  projectId: "wellness-app-5298c",
  storageBucket: "wellness-app-5298c.appspot.com",
  messagingSenderId: "906820808583",
  appId: "1:906820808583:web:852073dc71f287b32d2d22",
  measurementId: "G-MLZBGE5REC"
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH =  getAuth(FIREBASE_APP);
export const FIRESTOREDB = getFirestore(FIREBASE_APP); 



// Initialize Firebase Authentication with AsyncStorage persistence
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });

// ReactDOM.render(<App/>, document.getElementById('root'));
