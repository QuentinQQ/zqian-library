// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getFirestore
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxZVpqrToLWMsJuSV5gZfz5wZGwvUXUDc",
    authDomain: "week7-zhentao.firebaseapp.com",
    projectId: "week7-zhentao",
    storageBucket: "week7-zhentao.appspot.com",
    messagingSenderId: "705206042163",
    appId: "1:705206042163:web:a90b2d600df15c0f0b2d46"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export default db;