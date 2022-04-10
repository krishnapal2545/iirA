import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import {BsChatTextFill} from 'react-icons/bs'

export default function AdminNavbar() {

    const handleLogout = () => { localStorage.removeItem('admin'); window.location.reload(false); };
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="light" style={{ backgroundColor: "white" }} >
                <Container>
                    <Navbar.Brand href="/iirA/admin">
                        <img src={`${process.env.PUBLIC_URL}/images/logo2.png`} className="d-inline-block align-top" alt='app logo' style={{ width: "150px" }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/iirA" style={{ color: "black", fontSize: "15px" }}>Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Button style={{ minWidth: "200px", backgroundColor: "blueviolet", color: "white" }} variant="light" onClick={handleLogout} >Logout</Button>
                    <div style={{margin:"0px 10px 0px 10px"}}> </div>
                    <div style={{borderLeft:"1px solid black", height:"30px", margin:"auto"}}> </div>
                    <BsChatTextFill style={{color:"blueviolet", fontSize:"40px", margin:"0px 20px 0px 20px"}}/>
                </Container>
            </Navbar>
        </>
    )
}
