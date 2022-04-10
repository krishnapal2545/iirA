import React, { Component } from 'react'
import LoginPage from './Admin/login';
import NavBar from "./Home/navbar";

export default class AdminPage extends Component {
  render() {
    return (
      <>
      <NavBar/>
      <LoginPage/>
      </>
    )
  }
}
