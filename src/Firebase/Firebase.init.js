// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS5HiWDVQILsefFgU-w-OlUkUDq9GExa4",
  authDomain: "context-api-57b81.firebaseapp.com",
  projectId: "context-api-57b81",
  storageBucket: "context-api-57b81.appspot.com",
  messagingSenderId: "219573079796",
  appId: "1:219573079796:web:54b8278bd4a20f61ddd8a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) ;
 
export default auth ;