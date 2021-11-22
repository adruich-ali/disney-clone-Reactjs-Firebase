import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAfMDnnq8Kt3FcAIHDAUblIgzNSU6jPpWY",
    authDomain: "disney-clone-85233.firebaseapp.com",
    projectId: "disney-clone-85233",
    storageBucket: "disney-clone-85233.appspot.com",
    messagingSenderId: "979616108924",
    appId: "1:979616108924:web:5b8c4c2f95619a01b394f9",
    measurementId: "G-HG7689BS99",
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth , provider , storage};
  export default db ;