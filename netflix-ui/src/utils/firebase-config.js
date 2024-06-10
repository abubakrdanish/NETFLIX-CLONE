
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDK1Csw-MHOgjss7nB8fyAv58ZHJtm2jMg",
  authDomain: "react-netflix-clone-26cca.firebaseapp.com",
  projectId: "react-netflix-clone-26cca",
  storageBucket: "react-netflix-clone-26cca.appspot.com",
  messagingSenderId: "731604924283",
  appId: "1:731604924283:web:90814caccf32034f6d6fde",
  measurementId: "G-LQ51M8F4YH"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
