// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQWM5EWkuVZvs2EqOTtuXETU7cAnPu514",
  authDomain: "npgm-reactjs-coderhouse.firebaseapp.com",
  projectId: "npgm-reactjs-coderhouse",
  storageBucket: "npgm-reactjs-coderhouse.appspot.com",
  messagingSenderId: "515186619369",
  appId: "1:515186619369:web:b201c0739319fa3fe71178"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;