import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwS0Ne5PVDHUVM9o1VlylK_FQb87XiKUM",
  authDomain: "meetclone-1f220.firebaseapp.com",
  projectId: "meetclone-1f220",
  storageBucket: "meetclone-1f220.appspot.com",
  messagingSenderId: "113189298939",
  appId: "1:113189298939:web:01bfb07c48f704b813465e",
  measurementId: "G-KBSCWK1RLC",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
