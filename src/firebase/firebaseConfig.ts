import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyDO6iO_80dusy1ybjD-_gahzGU7na3AXe0",
  authDomain: "kesem-be97f.firebaseapp.com",
  projectId: "kesem-be97f",
  storageBucket: "kesem-be97f.firebasestorage.app",
  messagingSenderId: "174427843449",
  appId: "1:174427843449:web:d2d6c79dfa435850a45da8",
  measurementId: "G-F15DPQGQK9",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app); // Firestore
export const auth = getAuth(app);
