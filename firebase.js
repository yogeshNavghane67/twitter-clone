import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDTqgTJDV-niFL9_K_6f_dZUqkdiHrml-I",
    authDomain: "twitter-clone-8f86b.firebaseapp.com",
    projectId: "twitter-clone-8f86b",
    storageBucket: "twitter-clone-8f86b.appspot.com",
    messagingSenderId: "888833993452",
    appId: "1:888833993452:web:ec9e378021f56271d493c9"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };