// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuTGrQvQoR8oo0DigA4HjuEFFmL2rrzac",
  authDomain: "genious-car-b5f3b.firebaseapp.com",
  projectId: "genious-car-b5f3b",
  storageBucket: "genious-car-b5f3b.appspot.com",
  messagingSenderId: "704428931020",
  appId: "1:704428931020:web:0b1ea7da8b4657dd7a0f69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;