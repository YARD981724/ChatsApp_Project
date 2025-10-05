// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBtWcHySlilDZUOxh5iDb3OjmLwg-hQ7nM",
  authDomain: "authentication-35aca.firebaseapp.com",
  projectId: "authentication-35aca",
  storageBucket: "authentication-35aca.firebasestorage.app",
  messagingSenderId: "627463058914",
  appId: "1:627463058914:web:060be55dfdf771d38035bb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();
// export {auth}
