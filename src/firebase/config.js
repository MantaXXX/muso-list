import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAhzj9RMqNccNheHyfUjfX3S3q_9VQFzIk",
  authDomain: "muso-list.firebaseapp.com",
  projectId: "muso-list",
  storageBucket: "muso-list.appspot.com",
  messagingSenderId: "993911519324",
  appId: "1:993911519324:web:b36356d77cd09cea074e99"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp


export { projectFirestore, projectAuth, projectStorage, timestamp }