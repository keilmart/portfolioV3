import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbu8Q1DTpEyUzq4-CzJHVI8dAX7UvfF9M",
  authDomain: "portfoliov3-6fb9a.firebaseapp.com",
  databaseURL: "https://portfoliov3-6fb9a-default-rtdb.firebaseio.com",
  projectId: "portfoliov3-6fb9a",
  storageBucket: "portfoliov3-6fb9a.appspot.com",
  messagingSenderId: "1098031437426",
  appId: "1:1098031437426:web:5b8c0d1a7c327416a414eb",
  measurementId: "G-3S36KLKN3N",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
