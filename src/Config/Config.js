import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
  

  const firebaseConfig = {
    apiKey: "AIzaSyAGvtXdt9fbuOS6n-Hg0cY0sclb-U2MuF4",
    authDomain: "ecommerce-app-8b573.firebaseapp.com",
    projectId: "ecommerce-app-8b573",
    storageBucket: "ecommerce-app-8b573.appspot.com",
    messagingSenderId: "954348230777",
    appId: "1:954348230777:web:18e01a6b820fafb7319ca8",
    measurementId: "G-BYKWTRLXZD"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}