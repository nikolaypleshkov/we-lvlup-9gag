/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs} from "firebase/firestore/lite";
//Follow this pattern to import others Firebase services;
//import { } from 'firebase/<service>';

const firebaseConfig = {
    apiKey: "AIzaSyAC__9P6aYVonp5t3aHqvaHju3ld5vSETA",
    authDomain: "we-lvlup-9gag-1a483.firebaseapp.com",
    projectId: "we-lvlup-9gag-1a483",
    storageBucket: "we-lvlup-9gag-1a483.appspot.com",
    messagingSenderId: "706146217213",
    appId: "1:706146217213:web:d4fc66bf4915bedf752294",
    measurementId: "G-WYZ5WDXEC1"
  };
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

//TODO: Do your stuff here 
async function getUser(db){
    //...;
}