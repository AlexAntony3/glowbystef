import React, { useEffect, useState } from "react";
import { axiosRes } from "../api/axiosDefaults";
import appStyles from "../App.module.css";
import styles from "../styles/Gallery.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { CardColumns, Container } from "react-bootstrap";
import GalleryCard from "../components/GalleryCard";
import FilterBar from "../components/FilterBar";

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [filterable, setFilterable] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    getGalleryImages();
  }, []);

  useEffect(() => {
    filterResults();
    setGalleryImages(filteredResults);
  }, [searchTerm]);

  const filterResults = () => {
    const list = new Array();
    searchTerm &&
      results.map((result) => {
        if (result.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
          list.push(result);
        }
      });
    list.length !== 0 ? setFilteredResults(() => list) : getGalleryImages();
  };

  const getGalleryImages = async () =>
    await axiosRes
      .get("/galleries/")
      .then((response) => {
        setResults(response.data.results);
        setGalleryImages(response.data.results);
      })
      .catch((err) => {
        setResults([]);
        setGalleryImages([]);
      });

  return (
    <Container className={`${appStyles.Content}`}>
      <h1 className={appStyles.Header}>
        Gallery
        <span
          className={styles.Filter}
          onClick={() => setFilterable(!filterable)}
        >
          <FontAwesomeIcon icon={faSliders} size="xs" />
        </span>
      </h1>

      {filterable && (
        <FilterBar className={styles.FilterBar} setSearchTerm={setSearchTerm} />
      )}

      <CardColumns>
        {galleryImages.map((image) => {
          return <GalleryCard key={`gallery-image-${image.id}`} {...image} />;
        })}
      </CardColumns>
    </Container>
  );
};

export default Gallery;
