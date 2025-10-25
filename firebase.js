// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut }
  from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAtCn3_OvYgTopwni51xUFwNom_TG4OBls",
  authDomain: "rest-api-digitalsolution.firebaseapp.com",
  projectId: "rest-api-digitalsolution",
  storageBucket: "rest-api-digitalsolution.firebasestorage.app",
  messagingSenderId: "912052044063",
  appId: "1:912052044063:web:bac1ab167ab29153c9f02a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
