// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLaARBy2N_rfeREJ1Po2AvyT9IFapH1ms",
  authDomain: "asssessment-a2ae7.firebaseapp.com",
  projectId: "asssessment-a2ae7",
  storageBucket: "asssessment-a2ae7.appspot.com",
  messagingSenderId: "986291291438",
  appId: "1:986291291438:web:ae21863b244b7cacef26bf",
  measurementId: "G-BV8NK08NM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);