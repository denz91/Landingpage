import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const Tentang = () => {
  return (
    <Row>
      <Row className="h-100">
        <Col className="my-auto">
          <h1 className="fw-bold">ABOUT</h1>
          <h1 className="fw-bold">US</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            dicta cumque officiis dolore iure, sapiente doloremque nisi
            accusantium nulla molestiae eius obcaecati architecto vero
            consectetur!
          </p>
          <Button Variant="Primary" className="rounded-pill px-4 fw-bold">
            Learn More
          </Button>
        </Col>
        <Col className="my-auto">
          <img className="img-fluid" src="/img/about.png" alt="" />
        </Col>
      </Row>
      <Row className="justify-content-evenly">
        <Col
          className="border border-primary"
          style={{ height: "300px", width: "200px" }}
        ></Col>
        <Col
          className="border border-primary"
          style={{ height: "300px", width: "200px" }}
        ></Col>
        <Col
          className="border border-primary"
          style={{ height: "300px", width: "200px" }}
        ></Col>
      </Row>
    </Row>
  );
};

export default Tentang;
