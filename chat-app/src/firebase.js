import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCxNKRGhfnDKMMy_iafWHjPv3hVAkhE238",
  authDomain: "chat-app-19a43.firebaseapp.com",
  projectId: "chat-app-19a43",
  storageBucket: "chat-app-19a43.appspot.com",
  messagingSenderId: "448449207036",
  appId: "1:448449207036:web:41ff356d7b0cd69f41d579"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;