import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";

const Kontak = () => {
  return (
    <Row>
      <Row
        className=" justify-content-end min-vh-100 py-5 mt-5"
        style={{
          backgroundImage: `url(/img/illu_kontak.png)`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <Col className="mt-3 pt-3 " lg={5}>
          <h1
            className="mt-5 text-end text-muted"
            style={{ fontSize: "5.2rem" }}
          >
            CONTACT US
          </h1>
          <h1 className="text-end text-muted">Concept Landing Page</h1>
          <p className="text-end fs-6 mt-4 text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus at
            maiores optio ea explicabo vel ipsa praesentium ipsum, nesciunt
            tempora itaque asperiores maxime corporis assumenda.
          </p>
          <Row className="justify-content-end">
            <div className="d-flex justify-content-end">
              <Button
                variant="primary"
                className="rounded-pill px-4 fs-6 fw-bold mt-5"
              >
                GET STARTED
              </Button>
            </div>
          </Row>
        </Col>
        {/* <Col
          style={{
            backgroundImage: `url(/img/illu_kontak.png)`,
            backgroundRepeat: "no-repeat",
          }}
          lg={8}
        ></Col>
        <Col className="mt-5 pt-5 ">
          <h1 className="mt-5 text-end">CONTACT US</h1>
          <h3 className="text-end">Concept Landing Page</h3>
          <p className="text-end">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus at
            maiores optio ea explicabo vel ipsa praesentium ipsum, nesciunt
            tempora itaque asperiores maxime corporis assumenda.
          </p>
          <Row className="justify-content-end">
            <Col lg={4} className="px-0">
              <Button
                variant="primary"
                className="rounded-pill px-4 fs-6 fw-bold"
              >
                Contact Us
              </Button>
            </Col>
          </Row>
        </Col> */}
      </Row>
      <Row>
        <Col>
          <Form.Label htmlFor="input_text">Nama</Form.Label>
          <Form.Control type="text" id="input_text" />
        </Col>
        <Col></Col>
      </Row>
    </Row>
  );
};

export default Kontak;
