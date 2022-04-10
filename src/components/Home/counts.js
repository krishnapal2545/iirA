import React from "react";
import CountUp from "react-countup";
import { Row, Col } from "react-bootstrap";

export default function Customers() {
  return (
    <>
      <div style={{ height: "10px" }}></div>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ margin: "auto" }}>Our Numbers</h1>
        <h5 style={{ margin: "auto", color: "gray" }}>
          Number of Donors, Organisations and Foods Share.
        </h5>
      </div>
      <div style={{ height: "30px" }}></div>
      <div style={{ backgroundColor:"white" , boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" , width:"90%" , margin:"auto", borderRadius:"20px"}}>
      <Row xs={1} md={3} className="g-4" style={{ margin: "auto" }}>
        <Col>
          <div
            style={{
              maxWidth: "100%",textAlign:"center"
            }}
          >
            <h1 style={{ margin: "auto" }}>
              <CountUp end={1000} style={{
                  fontSize: "30px",
                  color: "blueviolet",
                }}/>{" "}
            </h1>
            <span style={{ margin: "auto" }}>Number of Donor/Helpers</span>
          </div>
        </Col>
        <Col>
          <div
            style={{
              maxWidth: "100%",textAlign:"center"
            }}
          >
            <h1 style={{ margin: "auto" }}>
              <CountUp end={10907} style={{
                  fontSize: "30px",
                  color: "blueviolet",
                }}/>{" "}
            </h1>
            <span style={{ margin: "auto" }}>
              Total Number of Foods Donated
            </span>
          </div>
        </Col>
        <Col>
          <div
            style={{
              maxWidth: "100%",textAlign:"center"
            }}
          >
            <h1 style={{ margin: "auto" }}>
              <CountUp end={1234} style={{
                  fontSize: "30px",
                  color: "blueviolet",
                }}/>{" "}
            </h1>
            <span style={{ margin: "auto" }}>
              Number of Organisations
            </span>
          </div>
        </Col>
        <div style={{ height: "30px" }}></div>
      </Row>
      </div>
      <div style={{ height: "30px" }}></div>
    </>
  );
}
