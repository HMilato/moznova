// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
require("firebase/firestore");
import 'firebase/storage'

  var firebaseConfig = {
    apiKey: "AIzaSyCdB4WLVqc3WHPUAxWdAVywhJPFIL_RQkI",
    authDomain: "vue-shop-39c4b.firebaseapp.com",
    projectId: "vue-shop-39c4b",
    storageBucket: "vue-shop-39c4b.appspot.com",
    messagingSenderId: "323635755422",
    appId: "1:323635755422:web:701481d5b27b60efbffe8f",
    measurementId: "G-KT9PTWC277"
  };
  // Initialize Firebase
  export const fb = firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();
  firebase.analytics();