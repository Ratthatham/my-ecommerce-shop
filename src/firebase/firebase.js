// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//Import google Authication function
import {
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

//Import Cloud Firestore
import {
  getFirestore,
  setDoc,
  getDoc,
  doc,
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore'

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
const app = initializeApp(firebaseConfig);

//Initialze cloud Firestore
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });
export const auth = getAuth();

// Import Data to Firebase
export const addCollectionAndDocument = async (collectionKey, objectToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
}

//Collect Data from Firebase
export const getCategoriesAndDocument = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const {title, items} = docSnapshot.data();
    acc[title.toLowerCase()] = items
    return acc;
  },{})
  return categoryMap;

}

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const createUserDataFromAuth =  async(userAuth) => {
  if(!userAuth) return;
  const userDocRef = await doc(db, 'users', userAuth.uid);
  const docSnapshort = await getDoc(userDocRef)

  if(!docSnapshort.exists()){
    const createdAt = new Date();
    const {displayName, email} = userAuth;

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });

    } catch(error) {
      console.log('error creating the user', error.massage);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async(email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async(email, password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword (auth, email, password)
}

export const signOutUser =  async () => signOut(auth);

export const onAuthStateChangedLisener = (callback) => onAuthStateChanged(auth, callback);

