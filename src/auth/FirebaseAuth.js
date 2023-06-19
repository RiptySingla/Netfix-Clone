import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmQthlHOkOpX1_r-o6ytTWIgGQ3AVIw3M",
  authDomain: "netflix-9bfd4.firebaseapp.com",
  projectId: "netflix-9bfd4",
  storageBucket: "netflix-9bfd4.appspot.com",
  messagingSenderId: "867726752537",
  appId: "1:867726752537:web:d50eb095be7b390d22a388",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
