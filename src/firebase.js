import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//your firebaseConfig const should be dropped


// initialze the firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

//initialze the firebase app with a data base called db
const db = firebaseApp.firestore();

// initialize the firebase app with an authentication system
const auth = firebase.auth();
export { db, auth };
