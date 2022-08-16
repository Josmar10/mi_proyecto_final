import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBR1DSZ4jKjkUyyndNy1tcKc3HKwKtWgt8",
  authDomain: "proyecto-final-web.firebaseapp.com",
  projectId: "proyecto-final-web",
  storageBucket: "proyecto-final-web.appspot.com",
  messagingSenderId: "330647563863",
  appId: "1:330629565463:web:9e8f0b3975b68aa698e4e2"
};

firebase.initializeApp(firebaseConfig);

export const BaseDatos = firebase.firestore();
export default firebase;