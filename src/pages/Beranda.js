import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const Beranda = () => {
  return (
    <Row className="h-100" lg={2} md={2} sm={1} xs={1}>
      <Col className="my-auto">
        <h1 className="fw-bold fs-1">Business</h1>
        <h4 className="fw-semibold">Analyst</h4>
        <p className="lh-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor dicta
          cumque officiis dolore iure, sapiente doloremque nisi accusantium
          nulla molestiae eius obcaecati architecto vero consectetur!
        </p>
        <Button variant="primary" className="rounded-pill px-4 fs-6 fw-bold">
          REGISTER
        </Button>
      </Col>
      <Col className="my-auto">
        <img className="img-fluid" src="/img/ilustrasi.png" alt="" />
      </Col>
    </Row>
  );
};

export default Beranda;
