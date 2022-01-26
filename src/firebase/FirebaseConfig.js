
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId:process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId:process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
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
  apiKey:process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain:process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId:process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket:process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId:process.env.REACT_APP_FIREBASE_APPID,
  measurementId:process.env.REACT_APP_FIREBASE_MEASUREMENTID
};


 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth= getAuth();
const db=getFirestore();

export {app,db,auth,analytics};