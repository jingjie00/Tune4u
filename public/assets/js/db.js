import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBct7eRux52dAVJ_8_YFNPz1zBm4sCzJB8",

    authDomain: "overflowingfeature.firebaseapp.com",
  
    databaseURL: "https://overflowingfeature-default-rtdb.asia-southeast1.firebasedatabase.app",
  
    projectId: "overflowingfeature",
  
    storageBucket: "overflowingfeature.appspot.com",
  
    messagingSenderId: "275715689132",
  
    appId: "1:275715689132:web:86d867c52de9808aad2d09",
  
    measurementId: "G-JW9RVHZRGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

    