import {initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPJROvkmuzXSqopokmcOSRoy4ypayuWBk",
  authDomain: "chat-app-59769.firebaseapp.com",
  projectId: "chat-app-59769",
  storageBucket: "chat-app-59769.firebasestorage.app",
  messagingSenderId: "301507568106",
  appId: "1:301507568106:web:21fd4a0ad17841f9655293",
  measurementId: "G-4GMM3Z5F4X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();