import React from "react";

import { Link, Redirect } from "react-router-dom";

import { Row, Col, Image } from "react-bootstrap";

// Import individual thumbnails

import luke from "./images/Truitt.jpg";
import dorn from "./images/Dorn.jpg";
// compose dictionary of headshots for people that have headshots
const headshots = {
  "luke": luke,
  "dorn": dorn
};

function Person(props) {
  console.log(headshots[props.img]);

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ padding: "2rem" }}>
      <div className="person-image" style={{width:"100%", alignContent:"center",justifyContent: "center"}}onClick={() => window.location.href = 'mailto:twolectronics@gmail.com'}>
        <img
          alt={props.img}
          src={headshots[props.img]}
          style={{
            height: "180px",
            width: "180px",
            objectFit: "cover",
            borderRadius: "100%"
          }}
        />
      </div>
      <div>
        <div style={{ paddingTop:"10px", width:"180px", fontSize: "1.5rem", textAlign:"center"}}>{props.name} </div>
      </div>
      <div>
        <div style={{ paddingTop:"5px", width:"180px", fontSize: "1rem", textAlign:"center", color:"#777777"}}>General Partner</div>
      </div>
    </Col>
  );
}
export default Person;
