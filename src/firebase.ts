import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCjy0ASSxCvcziwr2mZXMw3V8TpdcGq7uE",
  authDomain: "sophia-thapa-magar.firebaseapp.com",
  projectId: "sophia-thapa-magar",
  storageBucket: "sophia-thapa-magar.firebasestorage.app",
  messagingSenderId: "747197761155",
  appId: "1:747197761155:web:86f592bc3e6c1c704e7db6",
  measurementId: "G-X7FMTZ68BY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
