import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDq78OFnmaeCXeeMSJnBs2ATD3gj9Xm3UQ",
  authDomain: "prepwise-394ee.firebaseapp.com",
  projectId: "prepwise-394ee",
  storageBucket: "prepwise-394ee.firebasestorage.app",
  messagingSenderId: "241221236876",
  appId: "1:241221236876:web:d4999d0ffb3cf0390de3a9",
  measurementId: "G-ZV9CFCDPFY",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
