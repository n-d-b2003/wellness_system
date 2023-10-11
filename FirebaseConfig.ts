// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use



const firebaseConfig = {
  apiKey: "AIzaSyAlyk0DdGqsVp_36WH1FnalngxrHy37mG0",
  authDomain: "wellness-app-5298c.firebaseapp.com",
  projectId: "wellness-app-5298c",
  storageBucket: "wellness-app-5298c.appspot.com",
  messagingSenderId: "906820808583",
  appId: "1:906820808583:web:852073dc71f287b32d2d22",
  measurementId: "G-MLZBGE5REC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
