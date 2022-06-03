import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCFeEe5wq9CH05MbpIy2B2a79WxqEMP0o0",
    authDomain: "siasia-real-estate.firebaseapp.com",
    projectId: "siasia-real-estate",
    storageBucket: "siasia-real-estate.appspot.com",
    messagingSenderId: "451005736175",
    appId: "1:451005736175:web:9a5762a28c515ddb5ce71a",
    measurementId: "G-RQZPK7NX7N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth();