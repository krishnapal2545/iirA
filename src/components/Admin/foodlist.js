import { db } from './data/config';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore/lite';
import { Navbar, Container, Button, Card, Row, Col } from 'react-bootstrap'
import React, { Component } from 'react'
import './loading.css';

export default class FoodList extends Component {
    state = {
        foodlist: null,
        foodData: null
    }

    componentDidMount() {
        getDocs(collection(db, localStorage.getItem('type'))).then(snapshot => {
            const foods = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                foods.push(data)
            });
            this.setState({ foodlist: foods });
        }).catch(error => console.log(error));
    }
    componentDidUpdate(){
        getDocs(collection(db, localStorage.getItem('type'))).then(snapshot => {
            const foods = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                foods.push(data)
            });
            this.setState({ foodlist: foods });
        }).catch(error => console.log(error));
    }
    render() {
        let mainSC;
        let listSC;
       const handleDelete = async () => {
           await deleteDoc(doc(db,localStorage.getItem('type'),this.state.foodData.foodID)).then((detref) =>{
                this.setState({foodData:null});
            });
        }
        
        if(this.state.foodlist){
           listSC =  this.state.foodlist.map(food => {
            const handleClick = () => {
                this.setState({
                    foodData: food
                });
            }
            return (
                <Card style={{ margin: "10px", borderRadius: "10px" }} key={food.id} onClick={handleClick}>
                    <Row >
                        <Col>
                            <Card.Img variant="top" src={food.foodImg} style={{ width: "100px", maxHeight: "80px", padding: "10px" }} />
                        </Col>
                        <Col xs={8}>
                            <Card.Body>
                                <Card.Title> {food.name}</Card.Title>
                                <Card.Text>
                                    Upload Time: {new Date(food.uptime.seconds * 1000).toLocaleDateString("en-US")}<br></br>
                                    Expiry Time: {new Date(food.datetime.seconds * 1000).toLocaleDateString("en-US")}
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            )
        });
        }
        else{
            listSC =  
            <div className='loader'></div>
        }

        if (this.state.foodData) {
            let data = this.state.foodData;
            mainSC = <div >
                <div style={{ height: "10px" }}></div>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center", width: "50%", margin:"auto" }}>
                    <img src={data.foodImg} style={{ width:"50%"}}></img>
                </div>
                <div style={{ height: "20px" }}></div>
                <div style={{ margin: "30px 50px" }}>
                    Name   : {data.name} <br></br>
                    State   : {data.state == 1 ? 'Solide' : 'Liquide'} <br></br>
                    Quantity : {data.fnum} <br></br>
                    Place  : {data.place} <br></br>
                    Expiry  Time :{new Date(data.uptime.seconds * 1000).toLocaleDateString("en-US")} <br></br>
                    Upload Time : {new Date(data.datetime.seconds * 1000).toLocaleDateString("en-US")} <br></br>
                    Food ID : {data.foodID}<br></br>
                    User ID : {data.user} <br></br>
                </div>
                <div style={{ margin: "1% 50%" }}><Button onClick={handleDelete}>Delete</Button></div>
            </div>
        }
        else {
            mainSC = 
            <div style={{margin:"auto", width:"100%", height:"100%"}}>
            <img src={`${process.env.PUBLIC_URL}/images/loading.png`} style={{width:"90%"}} ></img>
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


