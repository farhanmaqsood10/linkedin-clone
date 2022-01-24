import firebase from './firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAAIDACIS-kdOyCm1K6m0KRnLs2BmgL5qk",
    authDomain: "linkedin-clone-e6d82.firebaseapp.com",
    projectId: "linkedin-clone-e6d82",
    storageBucket: "linkedin-clone-e6d82.appspot.com",
    messagingSenderId: "153236497176",
    appId: "1:153236497176:web:401f35a1111917a7cb746d"
  };

  const firebaseApp = firebase.initailizeApp(firebaseConfig);
  const db = firebaseApp.firebase();
  const auth = firebase.auth();

  export { db , auth };