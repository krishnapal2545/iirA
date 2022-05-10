// import { db } from './data/config';
// import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore/lite';
import users from './data/load.json';
import { Navbar, Container, Button, Card, Row, Col } from 'react-bootstrap'
import React, { Component } from 'react'
import './loading.css';

export default class UserList extends Component {
    state = {
        userlist: users,
        userData: null
    }

    // componentDidMount() {
    //     getDocs(collection(db, localStorage.getItem('type'))).then(snapshot => {
    //         const users = [];
    //         snapshot.forEach(doc => {
    //             const data = doc.data();
    //             users.push(data)
    //         });
    //         this.setState({ userlist: users });
    //     }).catch(error => console.log(error));
    // }
    // componentDidUpdate() {
    //     getDocs(collection(db, localStorage.getItem('type'))).then(snapshot => {
    //         const users = [];
    //         snapshot.forEach(doc => {
    //             // const data = doc.data();
    //             // console.log(doc.data()['name']);
    //             users.push(doc);
    //         });
    //         this.setState({ userlist: users });
    //     }).catch(error => console.log(error));
    // }
    render() {
        let mainSC;
        let listSC;
        const handleDelete = async () => {
            // console.log(this.state.userData.phone);
            // await get
            // await deleteDoc(doc(db, localStorage.getItem('type'), this.state.userData.id)).then((detref) => {
            //     this.setState({ userData: null });
            // });
        }

        if (this.state.userlist) {
            // listSC = this.state.userlist
           listSC = users.map(user => {
                const handleClick = () => {
                    console.log(user.id);
                    this.setState({
                        userData: user
                    });
                }
                // const data = user.data();
                return (
                    <Card style={{ margin: "10px", borderRadius: "10px" }} key={user.id} onClick={handleClick}>
                        <Row >
                            <Col>
                                <Card.Img variant="top" src={user.profileImg} style={{ width: "100px", maxHeight: "80px", padding: "10px", borderRadius: "100%" }} />
                            </Col>
                            <Col xs={8}>
                                <Card.Body>
                                    <Card.Title> {user.name}</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                )
            });
        }
        else {
            listSC =
                <div className='loader'></div>
        }

        if (this.state.userData) {
            let data = this.state.userData;
            mainSC = <div >
                <div style={{ height: "10px" }}></div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "50%", margin: "auto" }}>
                    <img src={data.profileImg} style={{ width: "50%" }} alt=' '></img>
                </div>
                <div style={{ height: "20px" }}></div>
                <div style={{ margin: "30px 50px" }}>
                    Name   : {data.name} <br></br>
                    Type   : {data.type} <br></br>
                    Phone  : {data.phone} <br></br>
                    Gender : {data.gender} <br></br>
                    Address : {data.id} <br></br>
                </div>
                <div style={{ margin: "1% 50%" }}><Button onClick={handleDelete}>Delete</Button></div>
            </div>
        }
        else {
            mainSC =
                <div style={{ margin: "auto", width: "100%", height: "100%" }}>
                    <img src={`${process.env.PUBLIC_URL}/images/loading.png`} style={{ width: "90%" }} alt=' '></img>
                </div>;
        }

        return (
            <Row style={{ margin: "auto" }}>
                <Col>
                    <div style={{ backgroundColor: "rgba(5, 5, 5, 0.030)", height: "100vh", display: "block", overflowY: "scroll", overflowX: "hidden" }}>
                        <Navbar collapseOnSelect expand="lg" variant="light" style={{ backgroundColor: "white" }} sticky='top' >
                            <Container>
                                <Navbar.Brand href="/admin">
                                    <img src={`${process.env.PUBLIC_URL}/images/logo2.png`} className="d-inline-block align-top" alt='app logo' style={{ width: "120px" }} />
                                </Navbar.Brand>
                            </Container>
                        </Navbar>
                        {listSC}
                    </div>
                </Col>
                <Col xs={8}>
                    <div style={{ overflow: "hidden", backgroundColor: "white" }}>
                        {mainSC}
                    </div>
                </Col>
            </Row>
        )
    }
}


