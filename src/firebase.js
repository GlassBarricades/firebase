import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC_LMOT8UeuuJaFuSRIXT16FD2O-3yngaU",
  authDomain: "test-4c743.firebaseapp.com",
  projectId: "test-4c743",
  storageBucket: "test-4c743.appspot.com",
  messagingSenderId: "1066909888138",
  appId: "1:1066909888138:web:d14043213afa101f888773"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
