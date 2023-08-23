// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyD8VDTkNfFdDMj1pGNnmu-xd_qDFAbfRNU",
  authDomain: "chat-app-2-a075c.firebaseapp.com",
  projectId: "chat-app-2-a075c",
  storageBucket: "chat-app-2-a075c.appspot.com",
  messagingSenderId: "497096559568",
  appId: "1:497096559568:web:6a67527437407be5b7c7d5",
  measurementId: "G-TYFXNZC72B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);