// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKrS8ltB4RWxCI-keMTtht59-slOL31lo",
  authDomain: "ai-model-df25c.firebaseapp.com",
  projectId: "ai-model-df25c",
  storageBucket: "ai-model-df25c.firebasestorage.app",
  messagingSenderId: "396605908541",
  appId: "1:396605908541:web:1c633f4679799543386c54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
