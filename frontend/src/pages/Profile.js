import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../components/Asset";

import styles from "../styles/Profile.module.css";
import appStyles from "../App.module.css";
import btnStyles from "../styles/Button.module.css";

import { useCurrentUser } from "../contexts/CurrentUserContext";

function Profile() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();

  useEffect(() => {
      setHasLoaded(true);
  }, [])

  const mainProfile = (
    <>
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <p>Image</p>
        </Col>
        <Col className="p-3">Profile content</Col>
      </Row>
    </>
  );


  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2">
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
    </Row>
  );
}

export default Profile;