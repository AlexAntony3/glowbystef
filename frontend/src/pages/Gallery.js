import React, { useEffect, useState } from "react";
import appStyles from "../App.module.css";
import { axiosRes } from "../api/axiosDefaults";
import GalleryCard from "../components/GalleryCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Gallery.module.css";
import FilterBar from "../components/FilterBar";
import { CardColumns, Container } from "react-bootstrap";

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [filterable, setFilterable] = useState();

  useEffect(() => {
    getGalleryImages();
  }, []);

  const getGalleryImages = async () =>
    await axiosRes
      .get("/galleries/")
      .then((response) => {
        setGalleryImages(response.data.results);
      })
      .catch((err) => {
        setGalleryImages([]);
      });

  return (
    <Container className={`${appStyles.Content} justify-content-center p-4 `}>
      <h1 className={appStyles.Header}>
        Gallery
        <span
          className={styles.Filter}
          onClick={() => setFilterable(!filterable)}
        >
          <FontAwesomeIcon icon={faSliders} size="xs" />
        </span>
      </h1>

      {filterable && <FilterBar className={styles.FilterBar} />}

      <CardColumns>
        {galleryImages.map((image) => {
          return <GalleryCard key={`gallery-image-${image.id}`} {...image} />;
        })}
      </CardColumns>
    </Container>
  );
};

export default Gallery;
