  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const analytics = getAnalytics(app);

