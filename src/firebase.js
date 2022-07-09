// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKS3S00EVe220iavrprBqgv4NdGdiW8XI",
  authDomain: "fir-493f0.firebaseapp.com",
  projectId: "fir-493f0",
  storageBucket: "fir-493f0.appspot.com",
  messagingSenderId: "959867503141",
  appId: "1:959867503141:web:73a08f25a3defece3ef5cc",
  measurementId: "G-1G0FBBTV4K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
