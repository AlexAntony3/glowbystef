import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Image
          src="https://res.cloudinary.com/daeryvqkx/image/upload/v1701124432/banner_ljq0jk.jpg"
          fluid
        />
      </Row>
      <Row>
        <Col>
          <Image
            src="https://res.cloudinary.com/daeryvqkx/image/upload/v1701125618/dp_sp8lqu.jpg"
            fluid
          />
        </Col>
        <Col>
          <Image
            src="https://res.cloudinary.com/daeryvqkx/image/upload/v1701124432/banner_ljq0jk.jpg"
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
