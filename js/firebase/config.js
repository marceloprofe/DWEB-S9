import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

// PASO 1: Copiá aquí el objeto firebaseConfig de tu propio proyecto Firebase.
const firebaseConfig = {
  apiKey: "AIzaSyC7LglD_GJutjk93ikX2bnwt7-D6eCtCLY",
  authDomain: "semana-9-6bd47.firebaseapp.com",
  projectId: "semana-9-6bd47",
  storageBucket: "semana-9-6bd47.firebasestorage.app",
  messagingSenderId: "372180634869",
  appId: "1:372180634869:web:6ac15bd1e2e5201ea3c9bc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
