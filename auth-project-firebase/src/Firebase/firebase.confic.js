// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpoIMkHWxf--lGOhMG4BJvAzzPpyNBT_A",
  authDomain: "auth-project-firebase-d8789.firebaseapp.com",
  projectId: "auth-project-firebase-d8789",
  storageBucket: "auth-project-firebase-d8789.appspot.com",
  messagingSenderId: "1038788927608",
  appId: "1:1038788927608:web:0d9ee362110aab2adc0d8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;