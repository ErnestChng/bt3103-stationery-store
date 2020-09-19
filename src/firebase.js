import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCtz-4nm8gTdyAl4j1Hvxdp9cKU3ZhhX50",
    authDomain: "fir-tutorial-991ae.firebaseapp.com",
    databaseURL: "https://fir-tutorial-991ae.firebaseio.com",
    projectId: "fir-tutorial-991ae",
    storageBucket: "fir-tutorial-991ae.appspot.com",
    messagingSenderId: "376139901497",
    appId: "1:376139901497:web:85066cb19f89bae56abbe8",
    measurementId: "G-6WG70F6DR2"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;
