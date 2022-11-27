// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXu7NiVuNwu7gng-oB00hYVQjUFq0FTVE",
    authDomain: "car-mania-20905.firebaseapp.com",
    projectId: "car-mania-20905",
    storageBucket: "car-mania-20905.appspot.com",
    messagingSenderId: "803324300395",
    appId: "1:803324300395:web:e4a91596e7c67c89e6752e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;