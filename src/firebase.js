// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBhCoJvDgdeTbYzF3m5mY_lC38cUPedtq4",
//     authDomain: "todo-app-ls.firebaseapp.com",
//     projectId: "todo-app-ls",
//     storageBucket: "todo-app-ls.appspot.com",
//     messagingSenderId: "483309037563",
//     appId: "1:483309037563:web:3263c1ee16fc89caefcd5e",
//     measurementId: "G-PHEDFWE75C"
//   };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
     apiKey: "AIzaSyBhCoJvDgdeTbYzF3m5mY_lC38cUPedtq4",
     authDomain: "todo-app-ls.firebaseapp.com",
     projectId: "todo-app-ls",
     storageBucket: "todo-app-ls.appspot.com",
     messagingSenderId: "483309037563",
     appId: "1:483309037563:web:3263c1ee16fc89caefcd5e",
     measurementId: "G-PHEDFWE75C"
});

const db = firebaseApp.firestore();

export default db;