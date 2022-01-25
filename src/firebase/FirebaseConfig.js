
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseconfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
    };

    const firebaseConfig2 = {
        apiKey: "AIzaSyBFhaecHe0hCyI7Boj0ROFDcAqzvGexAgQ",
        authDomain: "control-gastos-2780f.firebaseapp.com",
        projectId: "control-gastos-2780f",
        storageBucket: "control-gastos-2780f.appspot.com",
        messagingSenderId: "616759457820",
        appId: "1:616759457820:web:9fd08ce6a3e29a9f3847d9",
        measurementId: "G-MTQF1ME6L2"
      };

      const firebaseConfig3 = {
        apiKey: process.env.REACT_APP_APIKEY,
        authDomain: process.env.REACT_APP_AUTHDOMAIN,
        projectId: process.env.REACT_APP_PROJECTID,
        storageBucket: process.env.REACT_APP_STORAGEBUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
        appId: process.env.REACT_APP_APPID
      };

      const firebaseconfig4=
      {
        apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
        appId: process.env.REACT_APP_FIREBASE_APPID,
        measurementId: process.env.REACT_APP_MEASUREMENTID
        

      }
// Initialize Firebase
const app = initializeApp(firebaseconfig);
const analytics = getAnalytics(app);
const auth= getAuth();
const db=getFirestore();

export {app,db,auth,analytics};