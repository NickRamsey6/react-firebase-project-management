import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var config = {
    apiKey: "AIzaSyDGiH7itBKBQhhYrd8Rse2RO6GFv89j1Mo",
    authDomain: "net-ninja-mario-plan-ce995.firebaseapp.com",
    databaseURL: "https://net-ninja-mario-plan-ce995.firebaseio.com",
    projectId: "net-ninja-mario-plan-ce995",
    storageBucket: "",
    messagingSenderId: "9512208821",
    appId: "1:9512208821:web:013c4840fd841b7a01b1fc",
    measurementId: "G-PYHZV8ME1X"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;
