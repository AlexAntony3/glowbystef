import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { CardColumns, Container } from "react-bootstrap";
import appStyles from "../App.module.css";
import axios from "axios";
import { axiosRes } from "../api/axiosDefaults";
// import styles from "../../App.module.css";

const Services = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  useEffect(() => {
    getServices();
  }, []);

  const getServices = async () =>
    await axiosRes
      .get("/gallaries/")
      .then((response) => setGalleryImages(response.data.results))
      .catch((err) => setGalleryImages([]));

  return (
    <Container className={`${appStyles.Content} p-4 `}>
      <h1 className={appStyles.Header}>Our Services</h1>
      <CardColumns>
        {galleryImages.map((image, index) => {
          return (
            <ServiceCard
              key={image.id}
            />
          );
        })}
      </CardColumns>
    </Container>
  );
};

export default Services;
