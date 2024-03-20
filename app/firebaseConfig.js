// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCoD0Zi1-YjQM5d5Owz1j7s92UxkR7KiYw",
  authDomain: "dht11-aka.firebaseapp.com",
  databaseURL: "https://dht11-aka-default-rtdb.firebaseio.com",
  projectId: "dht11-aka",
  storageBucket: "dht11-aka.appspot.com",
  messagingSenderId: "860917602644",
  appId: "1:860917602644:web:5150b625a18a0ac26bd0c1",
  measurementId: "G-L3D18N3T1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };