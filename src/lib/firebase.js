// https://stackoverflow.com/questions/68929593/vue-2-export-default-imported-as-firebase-was-not-found-in-firebase-app
// https://firebase.google.com/docs/web/modular-upgrade#example_1_refactoring_an_function
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwS0Ne5PVDHUVM9o1VlylK_FQb87XiKUM",
  authDomain: "meetclone-1f220.firebaseapp.com",
  projectId: "meetclone-1f220",
  storageBucket: "meetclone-1f220.appspot.com",
  messagingSenderId: "113189298939",
  appId: "1:113189298939:web:01bfb07c48f704b813465e",
  measurementId: "G-KBSCWK1RLC",
};

const data = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export {data}
