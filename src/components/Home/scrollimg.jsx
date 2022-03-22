import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

export default function ScrollImg() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <div style={{height:"30px"}}></div>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div style={{textAlign:"center"}}>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/images/share1.png`}
          alt="First slide"
          style={{ maxHeight: "400px" , maxWidth: "1000px", margin:"auto", minHeight:"240px"}}
        />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/images/share2.png`}
          alt="First slide"
          style={{ maxHeight: "400px" , maxWidth: "1000px", margin:"auto", minHeight:"240px"}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/images/share4.png`}
          alt="First slide"
          style={{ maxHeight: "400px" , maxWidth: "1000px", margin:"auto", minHeight:"240px"}}
        />
      </Carousel.Item>
    </Carousel>
    </>
  );
}
