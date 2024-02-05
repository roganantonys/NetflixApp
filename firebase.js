// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtaPsS23TdLNFpOnHKsDsgAfeKxHLbygE",
  authDomain: "netflixapp-9ff6c.firebaseapp.com",
  projectId: "netflixapp-9ff6c",
  storageBucket: "netflixapp-9ff6c.appspot.com",
  messagingSenderId: "719395839587",
  appId: "1:719395839587:web:88abc96c6b2933cecae256"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export {auth};