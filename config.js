const { initializeApp }= require("firebase/app");
const { getFirestore } = require("firebase/firestore")

firebaseConfig = {
    apiKey: "AIzaSyAymCkJkHc28X5qxlYqICUcOwsjPB7fFMk",
    authDomain: "funtav-dd7b6.firebaseapp.com",
    projectId: "funtav-dd7b6",
    storageBucket: "funtav-dd7b6.appspot.com",
    messagingSenderId: "684757204256",
    appId: "1:684757204256:web:0e782d79bd1682c52e2b45",
    measurementId: "G-VWR3DTKN0P"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();

module.exports = db;