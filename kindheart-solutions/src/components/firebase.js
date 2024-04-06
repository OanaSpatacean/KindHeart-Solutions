import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgfIANnMjElEYLdf7CG9jIvp3-ftjIMfw",
  authDomain: "kindheart-solutions.firebaseapp.com",
  projectId: "kindheart-solutions",
  storageBucket: "kindheart-solutions.appspot.com",
  messagingSenderId: "693849061504",
  appId: "1:693849061504:web:9f041e6fc64eee42ab8e65",
  measurementId: "G-394TJYPZ79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth(app);

export { db };