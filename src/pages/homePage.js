import React from 'react'

/* FIREBASE DEPENDENCIES */
import firebase from 'firebase/compat/app';
import { getDatabase, ref, child, get } from "firebase/database"

import { GetUser } from '../firebase'
import { GetCurrentUserData } from '../firebase'
import { GetBits } from '../firebase'

/* INTERACTIVE COMPONENTS */
import NavigationBar from '../components/navbar'
import PostCard from '../components/postCard'
import SignOutButton from '../components/signOutButton'
import WelcomeText from '../components/welcomeText'
import welcomeText from '../components/welcomeText';

/* LOAD TRENDING BITS */
var firebaseRef = firebase.database().ref("bits");
// var bit0 = ""
// var bit1 = ""
// var bit2 = ""
// firebaseRef.once("value", function(snapshot) {
//   var data = snapshot.val()
//   let counter = 0;
//   for (let i in data) {
//     if (counter == 0) {
//       bit0 = data[i].message;
//     }
//     if (counter == 1) {
//       bit1 = data[i].message;
//     }
//     if (counter == 2) {
//       bit2 = data[i].message;
//     }
//     counter++;
//   }
// })

/* TOKEN FOUND */
var userFname = "";

const auth = firebase.auth();
const database = firebase.database();
const dbRef = ref(getDatabase());

function updateText() {
  get(child(dbRef, `users/${auth.currentUser.uid}`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      var data = snapshot.val();
      userFname = data.firstName;
      
    } else {
      console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
}

if (auth.currentUser) {
  updateText();
} else {
  firebase.auth().onAuthStateChanged(user => { 
    if (user) {
      // User was successfully signed in
      // Redirect to main page
      /* WELCOME TEXT */
      const auth = firebase.auth();
      const database = firebase.database();
      updateText();
  
  
      // userData.on("value", function(snapshot) {
      //   let firstName = snapshot.val()["firstName"];
      //   userFname = firstName;
      // })
  
    }
    else {
      // updateText();
      // User is not logged in
      console.log("incorrect username or password");
    }
  });
}

const HomePage = () => {
  return (
    <div class = "bodyContent">
      <NavigationBar/>
      <SignOutButton/>
      <div class = "headingFrame">
            <h2>Trending Bits</h2>
      </div>
      <div class = "divider" ></div>
      <div class = "postsFrame">
          <PostCard msg={"Why don't we have a 'Mascot vs. Mascot' halftime show in the Super Bowl? Imagine the chaos as they battle for supremacy!"}/>
          <PostCard msg={"The NFL needs to introduce a 'Trash Talk Thursday,' where players can roast their opponents on live TV before the game. Winner gets bragging rights for the week."}/>
          <PostCard msg={"In baseball, we should replace the seventh-inning stretch with a dance-off between the umpires and managers. The winner gets to make one instant replay challenge."}/>
      </div>
      <div class = "createBitFrame">
      </div>
    </div>
  );
}

export default HomePage