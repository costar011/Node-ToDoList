import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAcBz2TTpoL1XCnWDOEvUrKedGVt-Qv5jI",
  authDomain: "to-do-list-15c5b.firebaseapp.com",
  databaseURL: "https://to-do-list-15c5b.firebaseio.com",
  projectId: "to-do-list-15c5b",
  storageBucket: "to-do-list-15c5b.appspot.com",
  messagingSenderId: "901485934164",
  appId: "1:901485934164:web:85216955ed8070527c5fc1",
  measurementId: "G-65DT6Y59B3"
};

firebase.initializeApp(config);

const firestore = new firebase.firestore();

export { firestore };
