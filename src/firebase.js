/* REACT DEPENDENCIES */
import React from 'react'

/* FIREBASE DEPENDENCIES */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import {useAuthState} from 'react-firebase-hooks/auth';

firebase.initializeApp({
  apiKey: "AIzaSyC9UbICNpA767he7W-2PIbuyatG15nwni8",
  authDomain: "bitterr-e8569.firebaseapp.com",
  projectId: "bitterr-e8569",
  storageBucket: "bitterr-e8569.appspot.com",
  messagingSenderId: "120892097413",
  appId: "1:120892097413:web:720206f407c653c9f47aec",
  measurementId: "G-GSBPE4ME1Z"
});

const database = firebase.database()
const auth = firebase.auth()

/* FIREBASE FUNCTIONS */

export function Register() {
    // Get all input fields
    var fname = document.getElementsByClassName('fnameEntry');
    var lname = document.getElementsByClassName('lnameEntry');
    var password = document.getElementsByClassName('passwordEntry');
    var email = document.getElementsByClassName('emailEntry');

    fname = fname[0].value;
    lname = lname[0].value;
    password = password[0].value;
    email = email[0].value;
    alert(fname + lname);
    if (ValidateField(email) == false || ValidateField(fname) == false || ValidateField(lname) == false || ValidatePassword(password) == false) {
      alert(toString(email))
      return
      // Wasn't value, stops continuing the code
    }
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      var user = auth.currentUser;
  
      // Add user profile to Firebase Database
      var databaseRef = database.ref()
  
      // Create user data
      var userData = {
        email: email,
        fname: fname,
        lname: lname,
        lastLogin: Date.now()
      }
  
      databaseRef.child('users/' + user.uid).set(userData)
    })
    .catch(function(error) {
      var errorCode = error.errorcode
      var errorMessage = error.message
    })
  }
  
export function SignIn() {
    // Get all input fields
    var email = document.getElementsByClassName("emailEntry");
    var password = document.getElementsByClassName("passwordEntry");

    email = email[0].value;
    password = password[0].value;

    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
        var user = auth.currentUser;
        alert("Successfully signed in")
    })
}

function ValidatePassword(password) {
    if (password < 6) {
        return false
    } else {
        return true
    }
}
    
function ValidateField(field) {
    if (field == null) {
    return false
    }

    if (field.length <= 0) {
    return false
    } else {
    return true
    }
}