
/* REACT DEPENDENCIES */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* PAGE DEPENDENCIES */
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';

function App() {

  return (
    <Router>
      
      <NavigationBar/>
      <Routes>
        <Route exact path = '/signin' element = {<SignIn/>} />
        <Route exact path = '/signup' element = {<SignUp/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

function NavigationBar() {
  return (
    <div class = "navigationBar">
        <img class = "navLogo" src = "images/appLogo.svg"/>
        <h3>Bitterr</h3>
    </div>
  )
}

function Footer() {
  return (
    <div class = "footer">
          <h2>TigerHacks 2023 Competition</h2>
          <p>Created by Derek Nissen, Ashton Wooster, Tanner Kuchar, & Carter Cox</p>
    </div>
  )
}

export default App;
