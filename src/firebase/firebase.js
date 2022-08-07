// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider
} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCggsgmIOAFHSzDPrfnL4lzOgEOK31hSsQ",
    authDomain: "my-ecommerce-db-ebfcc.firebaseapp.com",
    projectId: "my-ecommerce-db-ebfcc",
    storageBucket: "my-ecommerce-db-ebfcc.appspot.com",
    messagingSenderId: "328568280955",
    appId: "1:328568280955:web:5335843053f85c14710fde"
  };

// Initialize Firebase
initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
