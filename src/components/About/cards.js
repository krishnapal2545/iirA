import React from "react";
import { Card,Row,Col } from "react-bootstrap";

export default function CardsInfo() {
  return (
    <>
      <div style={{ height: "40px" }}></div>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ margin: "auto" }}>Our Values</h1>
        <h5 style={{ margin: "auto" , color:"gray"}}>A few important things we live by</h5>
      </div>
      <div style={{ height: "30px" }}></div>
      <div style={{ margin: "auto" }}>
      <Row xs={1} md={3} className="g-4" style={{ margin: "auto" }}>
          <Col >
          <Card style={{maxWidth:"100%" , boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
          <div style={{ height: "20px" }}></div>
            <Card.Img  variant="top" src={process.env.PUBLIC_URL + "/images/open.png"} style={{width:"100px", margin:"auto"}} ></Card.Img>
            <Card.Body>
              <Card.Title>Open and honest</Card.Title>
              <Card.Text>
              We want you to know how your donation is used and the impact you’re having around the world.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col >
          <Card style={{maxWidth:"100%",boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
          <div style={{ height: "20px" }}></div>
          <Card.Img src={process.env.PUBLIC_URL + "/images/ever.png"} style={{width:"100px", margin:"auto"}} ></Card.Img>
            <Card.Body>
              <Card.Title>Every shared meal counts</Card.Title>
              <Card.Text>
              Give what you can — whether it’s one meal or one year of meals — and know that it makes a difference.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col >
          <Card style={{maxWidth:"100%",boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
          <div style={{ height: "20px" }}></div>
          <Card.Img src={process.env.PUBLIC_URL + "/images/together.png"} style={{width:"100px", margin:"auto"}} ></Card.Img>
            <Card.Body>
              <Card.Title>We’re in it together</Card.Title>
              <Card.Text>
              We want fighting hunger to be inclusive so that anyone, anywhere, can share the meal.
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
