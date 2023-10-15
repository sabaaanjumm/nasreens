// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB30MuuZq4hjdEvFdgoNgrISX-xJ0uxGu4",
  authDomain: "pensieve-bbccf.firebaseapp.com",
  projectId: "pensieve-bbccf",
  storageBucket: "pensieve-bbccf.appspot.com",
  messagingSenderId: "391057237299",
  appId: "1:391057237299:web:03c820392de63d7554ca46",
  measurementId: "G-K0634KG4ZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);