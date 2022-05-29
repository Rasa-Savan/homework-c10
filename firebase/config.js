import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqOQskLmc5TBMsUYpCBWG4slppzJ4-Md4",
  authDomain: "rp-course10.firebaseapp.com",
  projectId: "rp-course10",
  storageBucket: "rp-course10.appspot.com",
  messagingSenderId: "678530241558",
  appId: "1:678530241558:web:ab22431dce517f075b1137",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };