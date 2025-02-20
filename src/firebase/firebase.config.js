// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAbA6m4caBJXeRvRjVAxvbePvS-deCiI-A',
  authDomain: 'task-management-3bf19.firebaseapp.com',
  projectId: 'task-management-3bf19',
  storageBucket: 'task-management-3bf19.firebasestorage.app',
  messagingSenderId: '337768195137',
  appId: '1:337768195137:web:8f86801f45e6012c9612c0',
  measurementId: 'G-FN74TCQ43S',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
