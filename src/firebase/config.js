import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDpDpy7UJCcw8JkSt1lgODlp8vdkY52GAE",
  authDomain: "bankproject-a93f3.firebaseapp.com",
  projectId: "bankproject-a93f3",
  storageBucket: "bankproject-a93f3.appspot.com",
  messagingSenderId: "631176194104",
  appId: "1:631176194104:web:508ed59b86c2482aa2decd",
};

// init
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.Timestamp


export { projectFirestore, projectAuth, timestamp}