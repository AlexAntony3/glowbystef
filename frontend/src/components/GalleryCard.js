import React from "react";
import { Card, Button } from "react-bootstrap";
import styles from "../styles/Gallery.module.css";
const GalleryCard = ({ title, description, image, likes }) => {
  return (
    <Card className={styles.GalleryContentDisplay}>
      <Card.Img variant="top" src={image} />
      <Card.ImgOverlay>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button className="LikeButtonClicked btn-warning fa-solid fa-heart" type="button" />
      </Card.ImgOverlay>
    </Card>
  );
};

export default GalleryCard;
