import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const Kontak = () => {
  return (
    <Row className="h-100">
      <Col className="my-auto">
        <h1>CONTACT US</h1>
        <h2>Concept Landing Page</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus at
          maiores optio ea explicabo vel ipsa praesentium ipsum, nesciunt
          tempora itaque asperiores maxime corporis assumenda.
        </p>
        <Button variant="primary" className="rounded-pill px-4 fs-6 fw-bold">
          Contact Us
        </Button>
      </Col>
      <Col></Col>
    </Row>
  );
};

export default Kontak;
