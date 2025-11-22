import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCLrCc63TVZwjisUeLTzwT2FnBOn1IdxOs",
    authDomain: "stab-a32e9.firebaseapp.com",
    projectId: "stab-a32e9",
    storageBucket: "stab-a32e9.firebasestorage.app",
    messagingSenderId: "1054254313964",
    appId: "1:1054254313964:web:f6ba173eb129c6dc4590c9",
    measurementId: "G-GXQS7HDY7C"
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);