import React from "react";
import {
  Image,
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Jumbotron,
  Button,
} from "react-bootstrap";
import appStyles from "../App.module.css";
import styles from "../styles/Home.module.css";
import btnStyles from "../styles/Button.module.css"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Image
            src="https://res.cloudinary.com/daeryvqkx/image/upload/v1701124432/banner_ljq0jk.jpg"
            className={`${appStyles.FullWidth} ${styles.NoSpacing}`}
          />
        </Col>
      </Row>

      <div>
        <h1
          className={`${appStyles.Header} ${appStyles.FullWidth} ${styles.TitlePadding}`}
        >
          About me
        </h1>
        <Row>
          <Col sm={12} lg={6}>
            <Image
              src="https://res.cloudinary.com/daeryvqkx/image/upload/v1701125618/dp_sp8lqu.jpg"
              fluid
            />
          </Col>
          <Col sm={12} lg={6}>
            <div>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>Name</strong>: Steffi Samuel-Antony
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Occupation</strong>: Teacher and Make up Artist
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Hobbies</strong>: Hockey, Listening to music and
                    cooking
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>A little bit about me</strong>: Ever since seeing my
                    mum put make up on, I always saw it as something wonderful.
                    A little bit about me: Ever since seeing my mum put make up
                    on, I always saw it as something wonderful. A little bit
                    about me: Ever since seeing my mum put make up on, I always
                    saw it as something wonderful. A little bit about me: Ever
                    since seeing my mum put make up on, I always saw it as
                    something wonderful. A little bit about me: Ever since
                    seeing my mum put make up on, I always saw it as something
                    wonderful.
                  </ListGroup.Item>
                  <Link to="/services" className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright} ${btnStyles.ButtonMargin}`}>
                    SERVICES : Check out all the services I can
                    provide
                  </Link>
                  <Link to="/gallery" className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright} ${btnStyles.ButtonMargin}`}>
                    GALLERY : Check out my gallery and see if
                    you can find some inspiration for what you would like !
                  </Link>
                </ListGroup>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <h1
          className={`${appStyles.Header} ${appStyles.FullWidth} ${styles.TitlePadding}`}
        >
          Get in Touch!
        </h1>
        <Jumbotron fluid className={styles.JumboBackground}>
          <Container>
            <Row>
              <Col className={styles.DancingScript} md={6}>
                <h1>Glow By Stef</h1>
                <p>" We are the new definition of beauty "</p>
                <p>
                  Please note, I am booked about 2 weeks in advance so please be
                  sure to book in at the earliest possible time.
                </p>
              </Col>
              <Col className={styles.DancingScript} md={6}>
                <h1>Working Hours:</h1>
                <p>Monday - Friday: 08:00 - 18:00</p>
                <p>Saturday: 09:00 - 17:00</p>
                <p>Sunday: 10:00 - 16:00</p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    </Container>
  );
};

export default Home;
