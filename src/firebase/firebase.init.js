// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaJNgBgHRKEtzXHaPt9qEMAa4G-yBNo88",
  authDomain: "repliq-job-task.firebaseapp.com",
  projectId: "repliq-job-task",
  storageBucket: "repliq-job-task.appspot.com",
  messagingSenderId: "410781652953",
  appId: "1:410781652953:web:559ff1befd35ef3c07ebc8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
