import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDJRz5wpvxh3FxNy6JcREYXc0fA-B_Fwxs",
    authDomain: "instagram-clone-ba01f.firebaseapp.com",
    databaseURL: "https://instagram-clone-ba01f.firebaseio.com",
    projectId: "instagram-clone-ba01f",
    storageBucket: "instagram-clone-ba01f.appspot.com",
    messagingSenderId: "14544547032",
    appId: "1:14544547032:web:bf1107e3debe2857ecfbad",
    measurementId: "G-5JL4L36V7L"
});

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage};