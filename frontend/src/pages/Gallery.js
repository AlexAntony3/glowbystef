import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { CardColumns, Container } from "react-bootstrap";
import appStyles from "../App.module.css";
import axios from "axios";
import { axiosRes } from "../api/axiosDefaults";
import GalleryCard from "../components/GalleryCard";
// import styles from "../../App.module.css";

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  useEffect(() => {
    getGalleryImages();
  }, []);

  const getGalleryImages = async () =>
    await axiosRes
      .get("/galleries/")
      .then((response) => setGalleryImages(response.data.results))
      .catch((err) => setGalleryImages([]));

  return (
    <Container className={`${appStyles.Content} p-4 `}>
      <h1 className={appStyles.Header}>Our Services</h1>
      <CardColumns>
        {galleryImages.map((image, index) => {
          return (
            <GalleryCard
              key={image.id}
              image={image.image}
              description={image.description}
              title={image.title}
              like_id={image.like_id ? image.like_id : "null" }
              likes_count={image.likes_count}
            />
          );
        })}
      </CardColumns>
    </Container>
  );
};

export default Gallery;
