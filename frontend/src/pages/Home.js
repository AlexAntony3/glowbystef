import React from "react";
import { Image, Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import appStyles from "../App.module.css";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Image
            src="https://res.cloudinary.com/daeryvqkx/image/upload/v1701124432/banner_ljq0jk.jpg"
            fluid
          />
        </Col>
      </Row>

      <div>
        <h1 className={appStyles.Header}>About me</h1>
        <Row>
          <Col>
            <Image
              src="https://res.cloudinary.com/daeryvqkx/image/upload/v1701125618/dp_sp8lqu.jpg"
              fluid
            />
          </Col>
          <Col>
            <div>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>Name</strong>: Steffi Samuel-Antony</ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Occupation</strong>: Teacher and Make up Artist
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Hobbies</strong>: Hockey, Listening to music and cooking
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>A little bit about me</strong>: Ever since seeing my mum put make up
                    on, I always saw it as something wonderful. A little bit
                    about me: Ever since seeing my mum put make up on, I always
                    saw it as something wonderful. A little bit about me: Ever
                    since seeing my mum put make up on, I always saw it as
                    something wonderful. A little bit about me: Ever since
                    seeing my mum put make up on, I always saw it as something
                    wonderful. A little bit about me: Ever since seeing my mum
                    put make up on, I always saw it as something wonderful.
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Home;
