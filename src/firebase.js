import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPuSo1VTX7cjCEfJKrsfsbah4oYq2l4dI",
  authDomain: "lista-de-tarefas-270ce.firebaseapp.com",
  projectId: "lista-de-tarefas-270ce",
  storageBucket: "lista-de-tarefas-270ce.appspot.com",
  messagingSenderId: "12448229294",
  appId: "1:12448229294:web:586414fead5e0b020e4a3f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
