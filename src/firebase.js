import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYMKXHfbOtcNwuxmgdsMZ9bJdcpM7Gyhk",
  authDomain: "benitasbook.firebaseapp.com",
  projectId: "benitasbook",
  storageBucket: "benitasbook.appspot.com",
  messagingSenderId: "348965580882",
  appId: "1:348965580882:web:8de8e0dd65279ec74def8b",
  measurementId: "G-52SYT5TX39",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
