// Firebase configuration - REPLACE WITH YOUR OWN CONFIG from Firebase Console
// 1. Go to https://console.firebase.google.com/
// 2. Create new project (e.g. "portfolio-contacts")
// 3. Enable Firestore Database
// 4. Go to Project Settings > General > Your apps > Web app > Config

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "123456789",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js';

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Usage example:
// import { app, db } from './firebase-config.js';

