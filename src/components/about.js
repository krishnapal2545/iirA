import React, { Component } from 'react'
import CardsInfo from './About/cards'
import HeadInfo from './About/head'
import TeamInfo from './About/team'
import Footer from './Home/footer'
import NavBar from './Home/navbar'
import ScrollImg from './Home/scrollimg'

export default class AboutPage extends Component {
  render() {
    return (
      <>
      <NavBar/>
      <HeadInfo/>
      <ScrollImg/>
      <CardsInfo/>
      <TeamInfo/>
      <Footer/>
      </>
    )
  }
}
