import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";

const Tentang = () => {
  return (
    <Row>
      <Row className="h-100">
        <Col className="my-auto">
          <h1 className="fw-bold m-0">ABOUT</h1>
          <h1 className="fw-bold">US</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            necessitatibus consectetur? Molestias, recusandae? Accusamus
            repellat sed nesciunt eius error impedit soluta natus libero
            suscipit unde.
          </p>
          <Button Variant="Primary" className="rounded-pill px-4 fw-bold">
            Learn More
          </Button>
        </Col>
        <Col className="my-auto py-5">
          <img className="img-fluid" src="/img/about.png" alt="" />
        </Col>
      </Row>
      <Row className="justify-content-evenly">
        <h1 className="text-center mb-5">Testimonial</h1>
        <div className="w-25">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="img-fluid"
              style={{ height: "300px", objectFit: "cover" }}
              width="auto"
              variant="top"
              src="/img/3.jpg"
            />
            <Card.Body>
              <Card.Title>Bagus!</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="w-25">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{
                height: "300px",
                objectFit: "cover",
                objectPosition: "top",
              }}
              width="auto"
              variant="top"
              src="/img/1.jpg"
            />
            <Card.Body>
              <Card.Title>Hebat!</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="w-25">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{ height: "300px", objectFit: "cover" }}
              width="auto"
              variant="top"
              src="/img/2.jpg"
            />
            <Card.Body>
              <Card.Title>Mantap!</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Row>
  );
};

export default Tentang;
