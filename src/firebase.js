/* REACT DEPENDENCIES */
import React from 'react'

/* FIREBASE DEPENDENCIES */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

import { getDatabase, ref, set } from 'firebase/database';

firebase.initializeApp({
  apiKey: "AIzaSyC9UbICNpA767he7W-2PIbuyatG15nwni8",
  authDomain: "bitterr-e8569.firebaseapp.com",
  projectId: "bitterr-e8569",
  storageBucket: "bitterr-e8569.appspot.com",
  messagingSenderId: "120892097413",
  appId: "1:120892097413:web:720206f407c653c9f47aec",
  measurementId: "G-GSBPE4ME1Z",
  databaseURL: "https://bitterr-e8569-default-rtdb.firebaseio.com"
});

const database = firebase.database();
const auth = firebase.auth();

firebase.auth().onAuthStateChanged(user => { 
  if (user) {
    // User was successfully signed in
    // Redirect to main page
    
    

  }
  else {
    // User is not logged in
    console.log("incorrect username or password");
  }
});


/* FIREBASE FUNCTIONS */


export function GetBitData () {
  var usersRef = firebase.database().ref("bits");
  var data = null;
  usersRef.once("value", function(snapshot) {
    data = snapshot.val();
  })
  return Object.create(data);
}


export function Register() {
    // Get all input fields
    var fname = document.getElementsByClassName('fnameEntry');
    var lname = document.getElementsByClassName('lnameEntry');
    var password = document.getElementsByClassName('passwordEntry');
    var email = document.getElementsByClassName('emailEntry');

    fname = fname[0].value.toString();
    lname = lname[0].value.toString();
    password = password[0].value.toString();
    email = email[0].value.toString();
    if (ValidateField(email) == false || ValidateField(fname) == false || ValidateField(lname) == false || ValidatePassword(password) == false) {
      return
      // Wasn't value, stops continuing the code
    }
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {

      // Add user profile to realtime database

      const data = {
        "username": "N/A",
        "firstName": fname,
        "lastName": lname,
        "password": password,
        "email": email,
        "likes": {},
        "dislikes": {},
        "bits": {},
        "appraisal": 0
      }

      const db = getDatabase();
      set(ref(db, 'users/' + auth.currentUser.uid ), data);
      window.location.href = "/home";
    })
    .catch(function(error) {
      var errorCode = error.errorcode
      var errorMessage = error.message
      console.log(errorMessage);
    })
  }

export function SignIn() {
    if (document.readyState == "complete" || document.readyState == "loaded") {
      // Get all input fields
      var email = document.getElementsByClassName("emailEntry");
      var password = document.getElementsByClassName("passwordEntry");

      email = email[0].value;
      password = password[0].value;

      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        console.log(error.code);
        console.log(error.message);
      });

      firebase.auth().onAuthStateChanged(user => { 
        if (user) {
          // User was successfully signed in
          // Redirect to main page
          console.log(user.email + "logged in");
          window.location.href = "/home";

        }
        else {
          // User is not logged in
          console.log("incorrect username or password");
        }
      });
    }

}

export function SignOut() {
  auth.signOut()
  .then(function() {
    window.location.href = "/signin"
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