import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1CqW06_oszFK1qovvuLb06Ld_DA5lvrI",
    authDomain: "challenge-1e59f.firebaseapp.com",
    databaseURL: "https://challenge-1e59f.firebaseio.com",
    projectId: "challenge-1e59f",
    storageBucket: "challenge-1e59f.appspot.com",
    messagingSenderId: "242014281166",
    appId: "1:242014281166:web:d4b17c52b065b720181f9f",
    measurementId: "G-N6ESZ2CY7C"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  //This will allow us to use the database(db) and authentication(auth)
  //outside, in other components
  export {db, auth}