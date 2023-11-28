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

        <div>
        <Row>
          <Col>
            <Image
              src="https://res.cloudinary.com/daeryvqkx/image/upload/v1701125618/dp_sp8lqu.jpg"
              fluid
            />
          </Col>
          <Col>
            <div>
              <h3>About me</h3> 
              <h4>Age: 27</h4> 
              <h4>Job: Teacher</h4>
              <h4>Interests and hobbies: reading, hockey and</h4>
            </div>
          </Col>
          </Row>
        </div>
      
    </Container>
  );
};

export default Home;
