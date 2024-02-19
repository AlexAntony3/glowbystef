import React, { useEffect, useState } from "react";
import { axiosRes } from "../api/axiosDefaults";
import appStyles from "../App.module.css";
import styles from "../styles/Gallery.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { Button, Row, CardColumns, Col, Container } from "react-bootstrap";
import GalleryCard from "../components/GalleryCard";
import FilterBar from "../components/FilterBar";
import UploadPhotoModal from "../components/UploadPhotoModal";
import btnStyles from "../styles/Button.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [filterable, setFilterable] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [show, setShow] = useState(false);

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
    <>
      <UploadPhotoModal
        show={true}
        onHide={() => setShow(false)}
        fade={false}
      />
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
        <Row className="mb-2 mt-2"> 
          <Col md={6}>
            <Link to="/gallery/create">
              <Button
                className={`${btnStyles.Button} ${btnStyles.Bright} ${btnStyles.Wide}`}
              >
                [+] Add your own photo!
              </Button>
            </Link>
            </Col>
            <Col md={6}>
            <p>search bar</p>
          </Col>
        </Row>

        {filterable && (
          <FilterBar
            className={styles.FilterBar}
            setSearchTerm={setSearchTerm}
            setShowModal={setShow}
          />
        )}

        <CardColumns>
          {galleryImages.map((image) => {
            return <GalleryCard key={`gallery-image-${image.id}`} {...image} />;
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default Gallery;
