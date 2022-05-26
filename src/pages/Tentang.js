import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";

const Tentang = () => {
  return (
    <Row>
      <Row className="h-100 mt-3" lg={2} md={1} sm={1} xs={1}>
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
      <h1 className="text-center mb-5">Testimonial</h1>
      <Row className="justify-content-evenly" lg={4} md={2} sm={2} xs={1}>
        <Col>
          <Card className="shadow">
            <Card.Img
              className="img-fluid rounded-circle"
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
        </Col>
        <Col>
          <Card className="shadow">
            <Card.Img
              className="img-fluid rounded-circle"
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
        </Col>
        <Col>
          <Card className="shadow">
            <Card.Img
              className="img-fluid rounded-circle"
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
        </Col>
        <Col>
          <Card className="shadow">
            <Card.Img
              className="img-fluid rounded-circle"
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
        </Col>
      </Row>
    </Row>
  );
};

export default Tentang;
