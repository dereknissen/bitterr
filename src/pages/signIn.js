import React from 'react';

/* FIREBASE DEPENDENCIES */
import { SignIn } from '../firebase';

/* INTERACTIVE COMPONENTS */
import NavigationBar from '../components/navbar'
 
const SignInHTML = () => {
    return (
        <div class = "bodyContent">
          <NavigationBar/>
          <div class = "signInFrame">
              <h2>Sign In</h2>
              <div class = "fieldFrame">
                  <h4>Email</h4>
                  <input class = "emailEntry" id = "email"/>
              </div>
              <div class = "fieldFrame">
                  <h4>Password</h4>
                  <input class = "passwordEntry" type = "password" id = "password"/>
                  <button onClick = { SignIn } id = "signInButton" class = "greenButton">Sign In</button>
              </div>
              <p>New to Bitterr? <a href = "/signup">Create an account</a></p>
          </div>
        </div>
    );
};
 
export default SignInHTML;