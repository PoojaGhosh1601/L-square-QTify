import React from "react";
import styles from './Card.css';
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";

function Card({ data, type }) {
  const { image, follows, title, songs } = data;

  return (
    <div className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <img src={image} alt={title} className={styles.albumImage} />
      </div>
      <div className={styles.cardDetails}>
        {type !== "Jaz" && (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <div className={styles.banner}>
              <Chip label={`${follows} follows`} size="small" className={styles.chip} />
            </div>
          </Tooltip>
        )}
        {type === "Jaz" && (
          <div className={styles.banner}>
            <Chip label={`${follows} follows`} size="small" className={styles.chip} />
          </div>
        )}
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
}

export default Card;
