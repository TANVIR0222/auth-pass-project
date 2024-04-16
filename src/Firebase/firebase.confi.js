// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADO6NViW6jJhbeX-Q68JfCOSLVbL2xH5A",
  authDomain: "auth-pass-project.firebaseapp.com",
  projectId: "auth-pass-project",
  storageBucket: "auth-pass-project.appspot.com",
  messagingSenderId: "1064793990737",
  appId: "1:1064793990737:web:21442e22903831a1847a70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth;

