import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDyFLYOVqMiynX2bzdnvksKGDiQ-0nUNDA",
  authDomain: "proyectofinalreact-dbc.firebaseapp.com",
  projectId: "proyectofinalreact-dbc",
  storageBucket: "proyectofinalreact-dbc.appspot.com",
  messagingSenderId: "819399327853",
  appId: "1:819399327853:web:3ad97f2716760378beff64"
};

const app = initializeApp(firebaseConfig);

export const ddbb = getFirestore(app)