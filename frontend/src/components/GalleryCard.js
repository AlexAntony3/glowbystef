import React from "react";
import { Card, Button } from "react-bootstrap";
import btnStyles from "../styles/Button.module.css";
const GalleryCard = ({ title, description, image, rating }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.ImgOverlay>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.ImgOverlay>

      <Button
        className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
        type="submit"
      >
        Reviews
      </Button>
    </Card>
  );
};

export default GalleryCard;
