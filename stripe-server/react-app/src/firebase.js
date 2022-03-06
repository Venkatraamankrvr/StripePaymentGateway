import 'firebase/auth';
import 'firebase/firestore';

import firebase from 'firebase/app';

export const firebaseConfig = {
  apiKey: "AIzaSyCriL0cl30C29mNUVxTe0zlEgnK84dQ8Xs",
  authDomain: "stripeproject-e4904.firebaseapp.com",
  projectId: "stripeproject-e4904",
  storageBucket: "stripeproject-e4904.appspot.com",
  messagingSenderId: "481486305866",
  appId: "1:481486305866:web:10498e53efd55da92704b3"
};

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore();
export const auth = firebase.auth();
