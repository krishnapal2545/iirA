import React, { Component } from "react";
import NavBar from "./Home/navbar";
import ScrollImg from "./Home/scrollimg";
import CardsInfo from "./Home/cards";
import Footer from "./Home/footer";
import Customers from "./Home/counts";

class HomePage extends Component {
  render() {
    return (
      <>
        <NavBar/>
        <ScrollImg/>
        <CardsInfo/>
        <Customers/>
        <Footer/>
      </>
    );
  }
}

export default HomePage;
