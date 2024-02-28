import React from 'react';
import NoResult from "../assets/noresult.png";
import styles from "../styles/NotFound.module.css"
import Asset from './Asset';

const NotFound = () => {
  return (
    <div className={`${styles.NotFound}`}>
        <Asset src={NoResult} />
    </div>
  )
}

export default NotFound