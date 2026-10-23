import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjMbDIEitrtV6RgavFGHp597cmejysQZ8",
  authDomain: "arka-originals-website.firebaseapp.com",
  projectId: "arka-originals-website",
  storageBucket: "arka-originals-website.firebasestorage.app",
  messagingSenderId: "458064205054",
  appId: "1:458064205054:web:a668733f9d13a1807a41af"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
