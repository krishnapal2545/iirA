import React, { Component } from 'react'
import FoodCard from './foodcard'
import AdminNavbar from './navbar'

export default class Dashboard extends Component {
 
  render() {
    return (
      <>
      <AdminNavbar/>
      <FoodCard/>
      </>
    )
  }
}

