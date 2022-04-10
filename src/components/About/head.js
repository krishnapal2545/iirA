import React from "react";

export default function HeadInfo() {
  return (
    <>
      <div style={{ height: "40px" }}></div>
      <h1 style={{ textAlign: "center", fontSize: "50px" }}> Our Purpose</h1>
      <h5 style={{ textAlign: "center", color: "gray" }}>
        Empowering people to end global hunger
      </h5>
      <div style={{margin:"auto", width:"90%"}}>
      <p style={{textAlign:"center"}}>
        We’re here to end global hunger. And we’re guessing you are too. That’s
        why we were founded in 2015 under the United Nations World Food
        Programme — to make fighting hunger accessible to everyone. Because with
        just ₹60 and a few taps on your phone, you can share your meal with
        someone in need.
      </p>
      </div>
    </>
  );
}
