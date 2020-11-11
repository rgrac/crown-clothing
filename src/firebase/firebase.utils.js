import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBXbAWZ8ZJiyUe2zjWq-tkxswzaKLF0WT0",
    authDomain: "crwn-db-6e1b4.firebaseapp.com",
    databaseURL: "https://crwn-db-6e1b4.firebaseio.com",
    projectId: "crwn-db-6e1b4",
    storageBucket: "crwn-db-6e1b4.appspot.com",
    messagingSenderId: "448216351387",
    appId: "1:448216351387:web:db8628a5ed2dcce0c0fc3e",
    measurementId: "G-5H0CM19MGJ"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
