import  firebase from 'firebase/app';
import 'firebase/storage'
import 'firebase/firestore'




var firebaseConfig = {
    apiKey: "AIzaSyDSTkQSDN1O-eHP7Lg1dBAxXYKd5P2SHl4",
    authDomain: "instagram-clone-7cb68.firebaseapp.com",
    databaseURL: "https://instagram-clone-7cb68-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-7cb68",
    storageBucket: "instagram-clone-7cb68.appspot.com",
    messagingSenderId: "356124607095",
    appId: "1:356124607095:web:debe5fc4ad4c8167a3fc72",
    measurementId: "G-S6Q7D0BGMG"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  const projectStorage   = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

   export  { projectFirestore , projectStorage , timestamp} 