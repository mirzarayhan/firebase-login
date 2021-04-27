import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAFZbMTm8-ufmksItvnBgImXt-DQuAdvtE",
    authDomain: "fir-login-1dbd8.firebaseapp.com",
    databaseURL: "https://fir-login-1dbd8-default-rtdb.firebaseio.com",
    projectId: "fir-login-1dbd8",
    storageBucket: "fir-login-1dbd8.appspot.com",
    messagingSenderId: "158265503067",
    appId: "1:158265503067:web:72049d06be480c31dfbe7e",
    measurementId: "G-H281H75WY5"
}

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;