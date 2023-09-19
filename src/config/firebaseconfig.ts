// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsZixf4iTdLBr5SNh_5HgdBkjgqp4izhQ",
  authDomain: "fbase-b21fb.firebaseapp.com",
  databaseURL: "https://fbase-b21fb-default-rtdb.firebaseio.com",
  projectId: "fbase-b21fb",
  storageBucket: "fbase-b21fb.appspot.com",
  messagingSenderId: "1038339485528",
  appId: "1:1038339485528:web:9b0a1f34cd091cbac3bf2d",
  measurementId: "G-DW4YD6HNGC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);