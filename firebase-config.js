// Firebase configuration - REPLACE WITH YOUR OWN CONFIG from Firebase Console
// 1. Go to https://console.firebase.google.com/
// 2. Create new project (e.g. "portfolio-contacts")
// 3. Enable Realtime Database
// 4. Go to Project Settings > General > Your apps > Web app > Config

const firebaseConfig = {
  apiKey: "AIzaSyDpU3i1og2sG2adpfTduvdwMu6WmXl7KVU",
  authDomain: "personal-portfolio-87de4.firebaseapp.com",
  databaseURL: "https://personal-portfolio-87de4-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "personal-portfolio-87de4",
  storageBucket: "personal-portfolio-87de4.appspot.com",
  messagingSenderId: "1094270945485",
  appId: "1:1094270945485:web:676c677c7b6e389b168184",
  measurementId: "G-KDZ5EZ8LJV"
};

// Initialize Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js';

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

// Usage example:
// import { app, db } from './firebase-config.js';

