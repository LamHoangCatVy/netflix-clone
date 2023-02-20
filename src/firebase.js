import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyABZOugVeVLxFxXm2UnCtGbahVPkS93tBw",
  authDomain: "netflix-clone-react-aad6a.firebaseapp.com",
  projectId: "netflix-clone-react-aad6a",
  storageBucket: "netflix-clone-react-aad6a.appspot.com",
  messagingSenderId: "1065656760519",
  appId: "1:1065656760519:web:ebb34c3d15e65eff31a6e2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
