import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";


export default function LoginPage() {
  const [ID, setID] = useState("");
  const [Pass, setPass] = useState("");

  const HandleSubmit = (event) => {
    if (ID === "irA4ll" && Pass === "9697102109") {
      localStorage.setItem("admin", true);
      window.location.reload(false);
    }
    else {
      alert("Enter Valid Credential");
    }
    event.preventDefault();
  }
  return (
    <>
      <div style={{ height: "40px" }}></div>
      <div style={{ height: "400px", width: "300px", margin: "auto", backgroundColor: "white", borderRadius: "20px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
        <img src={process.env.PUBLIC_URL + "/images/login.png"} alt=" " style={{ width: "250px", margin: "2px 0px 0px 15px", borderRadius: "10px" }} />
        <Form>
          <div style={{ height: "40px" }}></div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter admin ID" value={ID}
              onChange={(e) => setID(e.target.value)} style={{ width: "270px", margin: "auto" }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Enter Password" value={Pass}
              onChange={(e) => setPass(e.target.value)} style={{ width: "270px", margin: "auto" }} />
          </Form.Group>
          <Button onClick={HandleSubmit} variant="light" style={{ width: "270px", color: "white", backgroundColor: "blueviolet", borderRadius: "20px", margin: "0px 0px 0px 15px" }}>Login</Button>
        </Form>
      </div>
    </>
  );

}
