import React, { useEffect, useState } from "react";
import { axiosRes } from "../api/axiosDefaults";
import appStyles from "../App.module.css";
import styles from "../styles/Gallery.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { CardColumns, Container } from "react-bootstrap";
import GalleryCard from "../components/GalleryCard";
import FilterBar from "../components/FilterBar";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const Gallery = () => {
  const currentUser = useCurrentUser();
  const [galleryImages, setGalleryImages] = useState([]);
  const [filterable, setFilterable] = useState(false);
  const [results, setResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getGalleryImages();
  }, [searchValue]);

  const getGalleryImages = async () => {
    try {
      const response = await axiosRes.get(`/galleries/?search=${searchValue}`);
      setResults(response.data.results);
      setGalleryImages(response.data.results);
    } catch (err) {
      console.error(err);
      setResults([]);
      setGalleryImages([]);
    }
  };

  const handleIdFromCard = async (id) => {
    await onDelete(id);
  };

  const onDelete = async (id) => {
    try {
      await axiosRes.delete(`/galleries/${id}/`);
      setGalleryImages((prev) =>
        prev.filter((image) => image.id !== id)
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = () => {
    setGalleryImages(results);
  };

  return (
    <>
      <Container className={`${appStyles.Content}`}>
        <h1 className={appStyles.Header}>
          Gallery
          {currentUser && (
            <span
              className={styles.Filter}
              onClick={() => setFilterable(!filterable)}
            >
              <FontAwesomeIcon icon={faSliders} size="xs" />
            </span>
          )}
        </h1>

        {currentUser && filterable && (
          <FilterBar
            className={styles.FilterBar}
            setSearchTerm={setSearchValue}
            onSearch={handleSearch}
          />
        )}

        <CardColumns>
          {galleryImages.map((image) => (
            <GalleryCard key={`gallery-image-${image.id}`} {...image} handleIdFromCard={handleIdFromCard} />
          ))}
        </CardColumns>
      </Container>
    </>
  );
};

export default Gallery;