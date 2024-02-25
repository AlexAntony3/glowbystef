import React from "react";
import { Card, Button } from "react-bootstrap"
import btnStyles from "../styles/Button.module.css";
;

const ServiceCard = (props) => {
  const { name, description, price, image, rating } = props;

  return (
      <Card>
        <Card.Img variant="top" src={image} style={{ height: '15rem' }} />
        <Card.Body style={{ height: '10rem' }}>
          <Card.Title>{name}</Card.Title>
          <Card.Text >{description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{rating}</small>
          <Card.Text >{`£${price}`}</Card.Text>
        </Card.Footer>
      </Card>
  );
};

export default ServiceCard;
