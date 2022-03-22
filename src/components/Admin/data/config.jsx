import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCTOw8qbQnFO80DtEO2d9o_HIgVKh83bKU",
    authDomain: "iira-6fc2f.firebaseapp.com",
    databaseURL: "https://iira-6fc2f-default-rtdb.firebaseio.com",
    projectId: "iira-6fc2f",
    storageBucket: "iira-6fc2f.appspot.com",
    messagingSenderId: "304186818460",
    appId: "1:304186818460:web:bc0d9561462b1bb2059259",
    measurementId: "G-YM5084WXQE"
  };

export const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app);
