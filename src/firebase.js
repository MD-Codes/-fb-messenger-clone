import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyA1kVsQq8BaioNkr9QwevYaT5KMhPGp_yY",
    authDomain: "fb-messenger-clone-c2850.firebaseapp.com",
    projectId: "fb-messenger-clone-c2850",
    storageBucket: "fb-messenger-clone-c2850.appspot.com",
    messagingSenderId: "452560878212",
    appId: "1:452560878212:web:495cd357a4a8731ab7e0d1",
    measurementId: "G-S1PW8BGZBL"
  
});

const db = firebaseApp.firestore();

export default db;
