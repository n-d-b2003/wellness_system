// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import App from './App'; // Import your App component


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

