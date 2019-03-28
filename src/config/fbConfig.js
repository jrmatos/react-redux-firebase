import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyDjKi7pXw3XIBIOgpBrUmsoISEAs3NqfrE",
    authDomain: "net-ninja-marioplan-48732.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-48732.firebaseio.com",
    projectId: "net-ninja-marioplan-48732",
    storageBucket: "net-ninja-marioplan-48732.appspot.com",
    messagingSenderId: "558550687925"
};
firebase.initializeApp(config);

export default firebase;