import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD90yxEAQkL2I2Hfh1TSCW7rC1d-lUhVDM",
    authDomain: "line-clone-ceb56.firebaseapp.com",
    projectId: "line-clone-ceb56",
    storageBucket: "line-clone-ceb56.appspot.com",
    messagingSenderId: "154195289681",
    appId: "1:154195289681:web:f3ba3149e0c6e5f163fa70"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };