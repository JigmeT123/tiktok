import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAFL67VGe3O4fQNeAGnupZaYjQMnZoGHYw",
  authDomain: "tik-tok-clone-6f734.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-6f734.firebaseio.com",
  projectId: "tik-tok-clone-6f734",
  storageBucket: "tik-tok-clone-6f734.appspot.com",
  messagingSenderId: "994103378999",
  appId: "1:994103378999:web:36aa48e69594e4c33aebb2",
  measurementId: "G-NQN03ZY0X5"
};
 const firebaseApp = firebase.initializeApp(firebaseConfig);
 let db  = firebaseApp.firestore;
  
export default db;

