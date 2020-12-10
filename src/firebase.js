import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKVcuFCgFuaLNjzDLdqyIDEgyCIlBKRPg",
  authDomain: "clone-d0bb9.firebaseapp.com",
  databaseURL: "https://clone-d0bb9.firebaseio.com",
  projectId: "clone-d0bb9",
  storageBucket: "clone-d0bb9.appspot.com",
  messagingSenderId: "519857723764",
  appId: "1:519857723764:web:d1d8e3e3917c83506c7421",
  measurementId: "G-XRYP6VY3H5",
};

// initialze the firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

//initialze the firebase app with a data base called db
const db = firebaseApp.firestore();

// initialize the firebase app with an authentication system
const auth = firebase.auth();

export { db, auth };
