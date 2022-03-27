/* 

    NOTE: CODE IN CONFIG FILE IS FROM:

    -> https://firebase.google.com/docs/storage/web/start#web-version-8

    CODE USED TO SETUP FIREBASE CONNECTION AND ACCESS TO FIREBASE STORAGE

*/

// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsB_0Bue5EHf9vL_GfGK5glk2Wsc0A9-Q",
    authDomain: "uniconnect-4d327.firebaseapp.com",
    projectId: "uniconnect-4d327",
    storageBucket: "uniconnect-4d327.appspot.com",
    messagingSenderId: "964358120420",
    appId: "1:964358120420:web:6a3bd4ed16d1c28803ddf1"
};

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export { storage }