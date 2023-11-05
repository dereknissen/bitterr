import React from 'react'
import LogOutButton from './signOutButton'

/* FIREBASE DEPENDENCIES */
import { userLoggedIn } from '../firebase'

function navbar() {
  return (
    <div class = "navigationBar">
        <img class = "navLogo" src = "images/appLogo.svg"/>
        <h3>Bitterr</h3>
    </div>
  )
}

export default navbar