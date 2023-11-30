import React, { useState } from "react";
import {
  Card,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import styles from "../styles/Gallery.module.css";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { axiosRes } from "../api/axiosDefaults";

const GalleryCard = ({
  id,
  title,
  description,
  image,
  like_id,
  likes_count,
}) => {
  const currentUser = useCurrentUser();

  const [likesCount, setLikesCount] = useState(likes_count);
  const [likeId, setLikeId] = useState(like_id);

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { gallery: id });
      setLikesCount((prevCount) => ++prevCount);
      setLikeId(data.id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${likeId}`);
      setLikesCount((prevCount) => --prevCount);
      setLikeId(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className={styles.GalleryContentDisplay}>
      <Card.Img variant="top" src={image} />
      <Card.ImgOverlay>
        {title && <Card.Title>{title}</Card.Title>}
        {description && <Card.Text>{description}</Card.Text>}
      </Card.ImgOverlay>
      <Card.Footer className={styles.LikeButton}>
        {likeId ? (
          <span onClick={handleUnlike}>
            <i
              className={`fas fa-heart ${styles.HeartEmpty} ${styles.LikeButton}`}
            />
          </span>
        ) : currentUser ? (
          <span onClick={handleLike}>
            <i
              className={`far fa-heart ${styles.HeartFill} ${styles.LikeButton}`}
            />
          </span>
        ) : (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Log in to like posts!</Tooltip>}
          >
            <i className="far fa-heart"></i>
          </OverlayTrigger>
        )}
        {likesCount}
      </Card.Footer>
    </Card>
  );
};

export default GalleryCard;
