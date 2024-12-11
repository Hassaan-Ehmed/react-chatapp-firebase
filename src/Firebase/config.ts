// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig:object = {
  apiKey: "AIzaSyBF6z7aTn3EHi7okz5-3Rp22GUItS46vAg",
  authDomain: "mini-react-chatapp.firebaseapp.com",
  projectId: "mini-react-chatapp",
  storageBucket: "mini-react-chatapp.firebasestorage.app",
  messagingSenderId: "462227971607",
  appId: "1:462227971607:web:f472d10d58969aa9408652"
};

// Initialize Firebase
const app:any = initializeApp(firebaseConfig);
export const db:any   = getFirestore(app);