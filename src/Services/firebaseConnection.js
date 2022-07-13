import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAeFSDqxZamdfWYySSDszhxQizOeBUjwJw",
    authDomain: "call-system-bc930.firebaseapp.com",
    projectId: "call-system-bc930",
    storageBucket: "call-system-bc930.appspot.com",
    messagingSenderId: "989423662598",
    appId: "1:989423662598:web:3c803e1f7ee9be64ed3587",
    measurementId: "G-QHD35DNCTL"
};


if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase;