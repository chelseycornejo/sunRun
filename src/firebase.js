// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsfuG2TcADtzdptK897t0LqeJ2V3TpmY0",
    authDomain: "sun-run-b6ccd.firebaseapp.com",
    databaseURL: "https://sun-run-b6ccd-default-rtdb.firebaseio.com",
    projectId: "sun-run-b6ccd",
    storageBucket: "sun-run-b6ccd.appspot.com",
    messagingSenderId: "89293185518",
    appId: "1:89293185518:web:d9ab53981e97e1b9586eff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;