// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "pets-blog-4a924.firebaseapp.com",
  projectId: "pets-blog-4a924",
  storageBucket: "pets-blog-4a924.appspot.com",
  messagingSenderId: "550446495670",
  appId: "1:550446495670:web:22f6e54eeb0ac2772b3317"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);