import React from 'react'
import { Card,Row,Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

export default function FoodCard() {
  let navigate = useNavigate();
  const redirectPage = (type) => {
    localStorage.setItem("type", type);
    if(type != 'users'){
      navigate('/foodlist');
    }
   if(type == 'users'){
      navigate('/userlist');
    }

  }


  return (
    <>
    <div style={{ height: "20px" }}></div>
      <div style={{ margin: "auto", textAlign:"center"}}>
      <Row xs={1} md={4} className="g-4" style={{ margin: "auto" }}>
          <Col >
          <Card style={{maxWidth:"100%" , boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}} onClick = {()=> {redirectPage('CookedFood')}}>
          <div style={{ height: "20px" }}></div>
            <Card.Img  variant="top" src={process.env.PUBLIC_URL + "/images/cooked_food.png"} style={{width:"100px", margin:"auto"}} ></Card.Img>
            <Card.Body>
              <Card.Title >Cooked Food</Card.Title>
            </Card.Body>
          </Card>
          </Col>
          <Col >
          <Card style={{maxWidth:"100%",boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}} onClick = {()=> {redirectPage('UncookedFood')}}>
          <div style={{ height: "20px" }}></div>
          <Card.Img src={process.env.PUBLIC_URL + "/images/uncooked_food.png"} style={{width:"100px", margin:"auto"}} ></Card.Img>
            <Card.Body>
              <Card.Title>Uncooked Food</Card.Title>
            </Card.Body>
          </Card>
          </Col>
          <Col >
          <Card style={{maxWidth:"100%",boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}} onClick = {()=> {redirectPage('Fruits&Vegies')}}>
          <div style={{ height: "20px" }}></div>
          <Card.Img src={process.env.PUBLIC_URL + "/images/fruit_vegies.png"} style={{width:"100px", margin:"auto"}} ></Card.Img>
            <Card.Body>
              <Card.Title>Fruites and Vegies</Card.Title>
            </Card.Body>
          </Card>
          </Col>
          <Col >
          <Card style={{maxWidth:"100%",boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}} onClick = {()=> {redirectPage('OtherThings')}}>
          <div style={{ height: "20px" }}></div>
          <Card.Img src={process.env.PUBLIC_URL + "/images/other_things.png"} style={{width:"100px", margin:"auto"}} ></Card.Img>
            <Card.Body>
              <Card.Title>Other Things</Card.Title>
            </Card.Body>
          </Card>
          </Col>
          <Col style={{margin:"auto"}} >
          <div style={{height:"40px"}}></div>
          <Card style={{maxWidth:"100%",boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}} onClick = {()=> redirectPage('users')}>
          <div style={{ height: "20px" }}></div>
          <Card.Img src={process.env.PUBLIC_URL + "/images/user.png"} style={{width:"200px", margin:"auto"}} ></Card.Img>
            <Card.Body>
              <Card.Title>Helpers / Organisations</Card.Title>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </div>
      <div style={{ height: "20px" }}></div>
    </>
  )
}
