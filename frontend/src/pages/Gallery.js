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
import NoResult from "../assets/noresult.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../utils/utils";

const Gallery = ({ message, filter = "" }) => {
  const currentUser = useCurrentUser();
  const [galleryImages, setGalleryImages] = useState({ results: [] });
  const [filterable, setFilterable] = useState(false);
  // const [results, setResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [contentLoaded, setContentLoaded] = useState(false);
  const [radioValue, setRadioValue] = useState("1");
  const profile_id = currentUser?.profile_id || "";

  const handleIdFromCard = async (id) => {
    await onDelete(id);
  };

  const onDelete = async (id) => {
    try {
      await axiosRes.delete(`/galleries/${id}/`);
      setGalleryImages((prev) => ({
        ...prev,
        results: prev.results.filter((image) => image.id !== id),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  // const handleSearch = () => {
  //   // setGalleryImages(results);
  //   console.log(searchValue);
  // };

  useEffect(() => {
    const getGalleryImages = async () => {
      try {
        let url = `/galleries/?`;
        console.log("profile_id", profile_id);
        console.log("radio value", radioValue);

        if (radioValue === "2") {
          url += `likes__owner__profile=${profile_id}`;
        } else {
          url += `search=${searchValue}`;
        }
        const { data } = await axiosRes.get(url);
        console.log(data);
        setGalleryImages(data);
        setContentLoaded(true);
      } catch (err) {
        console.error(err);
        // setGalleryImages([]);
        // setContentLoaded(true);
      }
    };

    getGalleryImages();
  }, [searchValue, filter, radioValue, profile_id]);

  // const handleFilterChange = (value) => {
  //   setCurrentFilter(value);
  // }

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
            onRadioChange={setRadioValue}
            setSearchTerm={setSearchValue}
            // onSearch={handleSearch}
          />
        )}
        {contentLoaded ? (
          galleryImages.results.length > 0 ? (
            <InfiniteScroll
              children={
                <CardColumns>
                  {galleryImages.results.map((image) => (
                    <GalleryCard
                      key={`gallery-image-${image.id}`}
                      {...image}
                      handleIdFromCard={handleIdFromCard}
                    />
                  ))}
                </CardColumns>
              }
              dataLength={galleryImages.results.length}
              loader={<Asset spinner />}
              hasMore={!!galleryImages.next}
              next={() => fetchMoreData(galleryImages, setGalleryImages)}
            />
          ) : (
            <Container className={`${appStyles.Content}`}>
              <Asset src={NoResult} />
            </Container>
          )
        ) : (
          <Container className={`${appStyles.Content}`}>
            <Asset spinner />
          </Container>
        )}
      </Container>
    </>
  );
};

export default Gallery;
