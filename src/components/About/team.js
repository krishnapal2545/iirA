import React from 'react'
import { Card,Row,Col } from "react-bootstrap";

export default function TeamInfo() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ margin: "auto" }}>Our Team</h1>
        <h5 style={{ margin: "auto" , color:"gray"}}>Some of the most inspiring, passionate people we know</h5>
      </div>
      <div style={{ height: "30px" }}></div>
      <div style={{ margin: "auto" }}>
      <Row xs={2} md={4} className="g-4" style={{ margin: "auto" }}>
          <Col >
          <Card style={{maxWidth:"100%" , boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
          <div style={{ height: "20px" }}></div>
            <Card.Img  variant="top" src={process.env.PUBLIC_URL + "/images/maleAvtar.png"} style={{width:"100px", margin:"auto"}} ></Card.Img>
            <Card.Body>
              <Card.Title>Krishna Pal</Card.Title>
              <Card.Text> Tech </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col >
          <Card style={{maxWidth:"100%",boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
          <div style={{ height: "20px" }}></div>
          <Card.Img src={process.env.PUBLIC_URL + "/images/maleAvtar.png"} style={{width:"100px", margin:"auto"}} ></Card.Img>
            <Card.Body>
              <Card.Title>Amit Patil</Card.Title>
              <Card.Text>
             Tech
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col >
          <Card style={{maxWidth:"100%",boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
          <div style={{ height: "20px" }}></div>
          <Card.Img src={process.env.PUBLIC_URL + "/images/femalAvtar.png"} style={{width:"100px", margin:"auto"}} ></Card.Img>
            <Card.Body>
              <Card.Title>Riya</Card.Title>
              <Card.Text>
              Tech
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col >
          <Card style={{maxWidth:"100%",boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
          <div style={{ height: "20px" }}></div>
          <Card.Img src={process.env.PUBLIC_URL + "/images/maleAvtar.png"} style={{width:"100px", margin:"auto"}} ></Card.Img>
            <Card.Body>
              <Card.Title>Abhay</Card.Title>
              <Card.Text>
              Tech
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </div>
      <div style={{ height: "40px" }}></div>
    </>
  )
}
