import React from 'react'

/* FIREBASE DEPENDENCIES */
import { SignOut } from '../firebase'

function signOutButton() {
  return (
    <a href = "" onClick = { SignOut } class = "logOutButton">Log out</a>
  )
}

export default signOutButton