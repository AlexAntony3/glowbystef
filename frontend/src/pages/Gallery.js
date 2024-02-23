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
import Asset from "../components/Asset";
import NoResult from "../assets/noresult.png"

const Gallery = ({ message, filter = "" }) => {
  const currentUser = useCurrentUser();
  const [galleryImages, setGalleryImages] = useState([]);
  const [filterable, setFilterable] = useState(false);
  const [results, setResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    getGalleryImages();
  }, [searchValue, filter]);

  const getGalleryImages = async () => {
    try {
      const response = await axiosRes.get(
        `/galleries/?${filter}search=${searchValue}`
      );
      // setResults(response.data.results);
      setGalleryImages(response.data.results);
      setContentLoaded(true);
    } catch (err) {
      console.error(err);
      // setResults([]);
      setGalleryImages([]);
      setContentLoaded(true);
    }
  };

  const handleIdFromCard = async (id) => {
    await onDelete(id);
  };

  const onDelete = async (id) => {
    try {
      await axiosRes.delete(`/galleries/${id}/`);
      setGalleryImages((prev) => prev.filter((image) => image.id !== id));
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
        {contentLoaded ? (
          galleryImages.length > 0 ? (
            <CardColumns>
              {galleryImages.map((image) => (
                <GalleryCard
                  key={`gallery-image-${image.id}`}
                  {...image}
                  handleIdFromCard={handleIdFromCard}
                />
              ))}
            </CardColumns>
          ) : (
            <Container className="appStyles.Content">
            <Asset src={NoResult} />
            </Container>
          )
        ) : (
          <Container className="appStyles.Content">
          <Asset spinner />
          </Container>
        )}
      </Container>
    </>
  );
};

export default Gallery;
