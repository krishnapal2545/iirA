import { db } from './data/config';
import { collection, doc, setDoc} from 'firebase/firestore';
import React, {useState } from 'react'
import { Navbar, Container, Button } from 'react-bootstrap'

export default function FoodList () {

        // const [name, setName] = useState('');
        // const [place, setPlace] = useState('');
        // const [state, setState] = useState('');
        // const [type, setType] = useState('');
        // const [uptime, setUptime] = useState('');
        // const [extime, setExtime] = useState('');
        // const [cost, setCost] = useState('');
        // const [fnum, setFnum] = useState('');
        // const [foodID, setFoodID] = useState('');
        // const [foodImg, setFoodImg] = useState('');
        // const [user, setUser] = useState('');
        const onSub = () =>{
            alert("time pass");
         
            db.collection('data').doc().setDoc({
                Nane: 'krishna',
            Age: 21,
            CourseEnrolled: 'EXTC'
            }
            ).then((docRef) => {
                alert("Data Successfully Submitted");
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        }

        return (
            <>
                <div style={{ width: "65vh", height: "100vh", backgroundColor: "rgba(5, 5, 5, 0.030)" }}>
                    <Navbar collapseOnSelect expand="lg" variant="light" style={{ backgroundColor: "white" }} >
                        <Container>
                            <Navbar.Brand href="/admin">
                                <img src={`${process.env.PUBLIC_URL}/images/logo2.png`} className="d-inline-block align-top" alt='app logo' style={{ width: "120px" }} />
                            </Navbar.Brand>
                            <Button onClick={onSub}>hii</Button>
                        </Container>
                    </Navbar>
                    <div style={{ height: "20px" }}></div>
                    {(() => {
                        const options = [];
                        for (let i = 0; i <= 10; i++) {
                            options.push(
                                <div style={{ height: "20px", backgroundColor: "blue", margin: "10px " }} onClick={onSub}></div>
                            );
                        }
                        return options;
                    })()}
                </div>
                <div></div>
            </>
        );
}

