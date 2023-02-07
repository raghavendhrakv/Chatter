
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAMasJqUZxKvLBjySaGCxgfUlc69XAQJoM",
  authDomain: "chatter-be9d6.firebaseapp.com",
  projectId: "chatter-be9d6",
  storageBucket: "chatter-be9d6.appspot.com",
  messagingSenderId: "13130730908",
  appId: "1:13130730908:web:505137005d47d199b28c59"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
