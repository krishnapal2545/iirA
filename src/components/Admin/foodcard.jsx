import React from 'react'
import { Card,Row,Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

export default function FoodCard() {
  let navigate = useNavigate();
  const redirectPage = () => {
   navigate('/foodlist');
  }


  return (
    <>
    <div style={{ height: "20px" }}></div>
      <div style={{ margin: "auto", textAlign:"center"}}>
      <Row xs={1} md={4} className="g-4" style={{ margin: "auto" }}>
          <Col >
          <Card style={{maxWidth:"100%" , boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}} onClick = {redirectPage}>
          <div style={{ height: "20px" }}></div>
            <Card.Img  variant="top" src={process.env.PUBLIC_URL + "/images/cooked_food.png"} style={{width:"100px", margin:"auto"}} ></Card.Img>
            <Card.Body>
              <Card.Title >Cooked Food</Card.Title>
            </Card.Body>
          </Card>
          </Col>
          <Col >
          <Card style={{maxWidth:"100%",boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}} onClick = {redirectPage}>
          <div style={{ height: "20px" }}></div>
          <Card.Img src={process.env.PUBLIC_URL + "/images/uncooked_food.png"} style={{width:"100px", margin:"auto"}} ></Card.Img>
            <Card.Body>
              <Card.Title>Uncooked Food</Card.Title>
            </Card.Body>
          </Card>
          </Col>
          <Col >
          <Card style={{maxWidth:"100%",boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}} onClick = {redirectPage}>
          <div style={{ height: "20px" }}></div>
          <Card.Img src={process.env.PUBLIC_URL + "/images/fruit_vegies.png"} style={{width:"100px", margin:"auto"}} ></Card.Img>
            <Card.Body>
              <Card.Title>Fruites and Vegies</Card.Title>
            </Card.Body>
          </Card>
          </Col>
          <Col >
          <Card style={{maxWidth:"100%",boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}} onClick = {redirectPage}>
          <div style={{ height: "20px" }}></div>
          <Card.Img src={process.env.PUBLIC_URL + "/images/other_things.png"} style={{width:"100px", margin:"auto"}} ></Card.Img>
            <Card.Body>
              <Card.Title>Other Things</Card.Title>
            </Card.Body>
          </Card>
          </Col>
          <Col style={{margin:"auto"}} >
          <div style={{height:"40px"}}></div>
          <Card style={{maxWidth:"100%",boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}} onClick = {redirectPage}>
          <div style={{ height: "20px" }}></div>
          <Card.Img src={process.env.PUBLIC_URL + "/images/helper.png"} style={{width:"100px", margin:"auto"}} ></Card.Img>
            <Card.Body>
              <Card.Title>Helpers</Card.Title>
            </Card.Body>
          </Card>
          </Col>
          <Col style={{margin:"auto"}}>
              <div style={{height:"40px"}}></div>
          <Card style={{maxWidth:"100%",boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}} onClick = {redirectPage}>
          <div style={{ height: "20px" }}></div>
          <Card.Img src={process.env.PUBLIC_URL + "/images/organisation.png"} style={{width:"100px", margin:"auto"}} ></Card.Img>
            <Card.Body>
              <Card.Title>Organisations</Card.Title>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </div>
      <div style={{ height: "20px" }}></div>
    </>
  )
}
