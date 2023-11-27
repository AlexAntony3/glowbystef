import React from "react";
import { Card, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import styles from "../styles/Gallery.module.css";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const GalleryCard = ({
  id,
  title,
  description,
  image,
  like_id,
  likes_count,
}) => {
  const currentUser = useCurrentUser();

  console.log(like_id);

  return (
    <Card className={styles.GalleryContentDisplay}>
      <Card.Img variant="top" src={image} />
      <Card.ImgOverlay >
        {title && <Card.Title>{title}</Card.Title>}
        {description && <Card.Text>{description}</Card.Text>}
      </Card.ImgOverlay>
      <Card.Footer className={styles.LikeButton}>
        {currentUser ? (
          <span onClick={() => {}}>
            <i className={`far fa-heart ${styles.HeartEmpty} ${styles.LikeButton}`}></i>
          </span>
        ) : (
          <span onClick={() => {}}>
            <i className={`far fa-heart ${styles.HeartFill} ${styles.LikeButton}`}></i>
          </span>
        ) 
        // :  (
        //   <OverlayTrigger
        //       placement="top"
        //       overlay={<Tooltip>Log in to like posts!</Tooltip>}
        //     >
        //       <i className={`"far fa-heart" ${styles.HeartEmpty} `} />
        //     </OverlayTrigger>
        // )
        }
        {likes_count}
      </Card.Footer>
    </Card>
  );
};

export default GalleryCard;
