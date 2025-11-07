// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";   // 👈 THIS IS REQUIRED
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXIO_rp9XDoUGhE3ooS8PQMo_S1yEIvJs",
  authDomain: "watportfolio-1faed.firebaseapp.com",
  projectId: "watportfolio-1faed",
  storageBucket: "watportfolio-1faed.firebasestorage.app",
  messagingSenderId: "807043164505",
  appId: "1:807043164505:web:83b206e8e91d0bc0ea8448",
  measurementId: "G-FZEY36PJFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);