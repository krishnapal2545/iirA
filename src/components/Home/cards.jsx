import React from "react";
import { Card,Row,Col } from "react-bootstrap";

export default function CardsInfo() {
  return (
    <>
      <div style={{ height: "40px" }}></div>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ margin: "auto" }}>Share Your Meal</h1>
        <h5 style={{ margin: "auto" , color:"gray"}}>India's First app who directly connect's hunger to donor</h5>
      </div>
      <div style={{ height: "30px" }}></div>
      <div style={{ margin: "auto" }}>
      <Row xs={1} md={4} className="g-4" style={{ margin: "auto" }}>
          <Col style={{ margin: "auto" }}>
          <Card style={{maxWidth:"100%" , boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
          <div style={{ height: "20px" }}></div>
            <Card.Img  variant="top" src={`${process.env.PUBLIC_URL}/images/simple.png`} style={{width:"100px", margin:"auto"}} ></Card.Img>
            <Card.Body>
              <Card.Title>Simple</Card.Title>
              <Card.Text>
              It only takes a few taps on your phone to start having an impact.
              </Card.Text>
            </Card.Body>
          </Card>
          <div style={{ height: "20px" }}></div>
          </Col>
          <Col style={{ margin: "auto" }}>
          <Card style={{maxWidth:"100%",boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
          <div style={{ height: "20px" }}></div>
          <Card.Img src={process.env.PUBLIC_URL + "/images/afford.png"} style={{width:"100px", margin:"auto"}} ></Card.Img>
            <Card.Body>
              <Card.Title>Affordable</Card.Title>
              <Card.Text>
              With just ₹60, you can share the meal with someone in need.
              </Card.Text>
            </Card.Body>
          </Card>
          <div style={{ height: "20px" }}></div>
          </Col>
          <Col style={{ margin: "auto" }}>
          <Card style={{maxWidth:"100%",boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
          <div style={{ height: "20px" }}></div>
          <Card.Img src={process.env.PUBLIC_URL + "/images/global.png"} style={{width:"100px", margin:"auto"}} ></Card.Img>
            <Card.Body>
              <Card.Title>Global</Card.Title>
              <Card.Text>
              Decide where you want to help and the Food Programme will deliver the meals.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </div>
      <div style={{ height: "40px" }}></div>
    </>
  );
}
