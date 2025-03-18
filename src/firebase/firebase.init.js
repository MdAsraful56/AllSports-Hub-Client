// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFiB84zkMx6qO2D87qCgf7KVwWtqDamB0",
  authDomain: "allsports-hub.firebaseapp.com",
  projectId: "allsports-hub",
  storageBucket: "allsports-hub.firebasestorage.app",
  messagingSenderId: "459110364749",
  appId: "1:459110364749:web:6c342f47eaa1ac78b54e04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;