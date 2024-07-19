// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCYER9ERcAjAN8rsZJlTIC4E0lTYEmCNU",
  authDomain: "408803.firebaseapp.com",
  projectId: "youtube-408803",
  storageBucket: "youtube-408803.appspot.com",
  messagingSenderId: "606002885784",
  appId: "1:606002885784:web:992e190f68e98ceeea0ced",
  measurementId: "G-Q09ZGP5D12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
