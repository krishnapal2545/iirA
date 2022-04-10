import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdCopyright } from "react-icons/md";
import {FiMail} from "react-icons/fi";
import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsTwitter,
  BsSnapchat,
} from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <div style={{backgroundColor:"white"}}>
        <div style={{height:"10px"}}></div>
        <Row xs={1} md={2} style={{ margin: "auto" }}>
            <Col>
            <p style={{ color: "gray", margin: "3% 0% 3% 5%" }}>
          <FiMail style={{ fontSize: "30px" }} /> Contact Us
        </p>
            </Col>
             <Row xs={2} md={2} style={{ margin: "auto" }}>
                 <Col>
                 <Link to='https://github.com/krishnapal2545/iirA/blob/master/app.apk'>
                 <img src={process.env.PUBLIC_URL + "images/android.png"} alt="" style={{maxWidth:"120px",margin:"1% 0%"}} />
                 </Link>
                 
                 </Col>
                 <Col>
                 <img src={process.env.PUBLIC_URL + "images/ios.svg"} alt="" style={{maxWidth:"200px", margin:"1% 0%"}} />
                 </Col>
             </Row>
            <Col>
            </Col>
        </Row>
        <hr style={{ color: "gray", margin: "2% 5% 0% 3%" }} />
        <Row xs={1} md={2} style={{ margin: "auto" }}>
          <Col>
            <p
              style={{ color: "gray", margin: "5% 0% 5% 5%", fontSize: "13px" }}
            >
              {" "}
              FAQ &nbsp;&nbsp;&nbsp; Terms of Use &nbsp;&nbsp;&nbsp; Privacy
              Policy
            </p>
          </Col>
          <Col>
            <div style={{ color: "gray", margin: "5% 0% 5% 5%" }}>
              <BsFacebook
                style={{
                  fontSize: "30px",
                  color: "blueviolet",
                  margin: "0% 5% 3% 2%",
                }}
              />
              <BsInstagram
                style={{
                  fontSize: "30px",
                  color: "blueviolet",
                  margin: "0% 5% 3% 2%",
                }}
              />
              <BsTwitter
                style={{
                  fontSize: "30px",
                  color: "blueviolet",
                  margin: "0% 5% 3% 2%",
                }}
              />
              <BsYoutube
                style={{
                  fontSize: "30px",
                  color: "blueviolet",
                  margin: "0% 5% 3% 2%",
                }}
              />
              <BsSnapchat
                style={{
                  fontSize: "30px",
                  color: "blueviolet",
                  margin: "0% 5% 3% 2%",
                }}
              />
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <Link style={{ fontSize: "15px", margin: "0% 5% 3% 16%",  color:"black" }} to="/admin">
                 irA{" "}
                <MdCopyright /> 2022{" "}
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
