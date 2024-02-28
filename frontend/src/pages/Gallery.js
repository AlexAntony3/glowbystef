import React, { useEffect, useState } from "react";

import GalleryCard from "../components/GalleryCard";
import FilterBar from "../components/FilterBar";
import Asset from "../components/Asset";
import InfiniteScroll from "react-infinite-scroll-component";
import NoResult from "../assets/noresult.png";
import { useCurrentUser } from "../contexts/CurrentUserContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { CardColumns, Container } from "react-bootstrap";

import { fetchMoreData } from "../utils/utils";
import appStyles from "../App.module.css";
import styles from "../styles/Gallery.module.css";
import { axiosRes } from "../api/axiosDefaults";

const Gallery = ({ filter = "" }) => {
  const currentUser = useCurrentUser();
  const [galleryImages, setGalleryImages] = useState({ results: [] });
  const [filterable, setFilterable] = useState(false);
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
      // console.log(err);
    }
  };

  useEffect(() => {
    const getGalleryImages = async () => {
      try {
        let url = `/galleries/?`;

        if (radioValue === "2") {
          url += `likes__owner__profile=${profile_id}`;
        } else {
          url += `search=${searchValue}`;
        }
        const { data } = await axiosRes.get(url);
        setGalleryImages(data);
        setContentLoaded(true);
      } catch (err) {
        console.error(err);
      }
    };

    getGalleryImages();
  }, [searchValue, filter, radioValue, profile_id]);

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
