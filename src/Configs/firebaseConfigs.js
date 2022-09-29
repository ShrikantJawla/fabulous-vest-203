// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2OOMQnmqwXOvul2pMn2FkxQK6jZLG84g",
    authDomain: "zoomcar-clone-600cb.firebaseapp.com",
    projectId: "zoomcar-clone-600cb",
    storageBucket: "zoomcar-clone-600cb.appspot.com",
    messagingSenderId: "187018594660",
    appId: "1:187018594660:web:5c9c36692e31c6343a5271",
    measurementId: "G-TGTKBFG0LW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);