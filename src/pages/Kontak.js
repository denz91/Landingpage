import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";

const Kontak = () => {
  const [pesan, setPesan] = useState("");
  const [nama, setNama] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let uri = `Hallo, nama saya ${nama}.\n${pesan}`;
    let encode = encodeURI(uri);
    window.open(`http://wa.me/6285723099957?text=${encode}`);
  };
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
            className="mt-5 text-end text-muted mb-0"
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
              <a href="http://wa.me/6285723099957/: " target={"_blank"}>
                <Button
                  variant="primary"
                  className="rounded-pill px-4 fs-6 fw-bold mt-5"
                >
                  GET STARTED
                </Button>
              </a>
            </div>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Form onSubmit={handleSubmit}>
            <h4>Pesan</h4>
            <Form.Label htmlFor="input_text">Nama</Form.Label>
            <Form.Control
              type="text"
              id="input_text"
              placeholder="Masukan Nama"
              onChange={(e) => setNama(e.target.value)}
            />
            <Form.Label htmlFor="input_text">Pesan</Form.Label>
            <Form.Control
              as="textarea"
              onChange={(e) => setPesan(e.target.value)}
              id="input_text"
              placeholder="Masukan Pesan"
              rows={5}
            />
            <Row className="justify-content-end">
              <Button type="submit" className="mt-3 w-25">
                Kirim
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Row>
  );
};

export default Kontak;
