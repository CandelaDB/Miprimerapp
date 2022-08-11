import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/*const firebaseConfig = {
    apiKey: "AIzaSyDyFLYOVqMiynX2bzdnvksKGDiQ-0nUNDA",
    authDomain: "proyectofinalreact-dbc.firebaseapp.com",
    projectId: "proyectofinalreact-dbc",
    storageBucket: "proyectofinalreact-dbc.appspot.com",
    messagingSenderId: "819399327853",
    appId: "1:819399327853:web:3ad97f2716760378beff64"
};*/

// Initialize Firebase
//initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<React.StrictMode>
    <App />
   // </React.StrictMode>
);
//If you want to start measuring performance in your app, pass a function
//to log results (for example: reportWebVitals(console.log))
 //or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
