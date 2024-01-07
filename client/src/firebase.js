// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-986f0.firebaseapp.com",
  projectId: "mern-auth-986f0",
  storageBucket: "mern-auth-986f0.appspot.com",
  messagingSenderId: "19746456328",
  appId: "1:19746456328:web:7e40b80a25af9fa176e2bd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);