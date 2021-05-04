import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCF5-KwgbXYp7jjiieJgjRRhek1MNp7IX8",
    authDomain: "tinder-clone-560a3.firebaseapp.com",
    projectId: "tinder-clone-560a3",
    storageBucket: "tinder-clone-560a3.appspot.com",
    messagingSenderId: "1070082280715",
    appId: "1:1070082280715:web:92d424355936418674260e",
    measurementId: "G-S2L14TP0L1"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database
  