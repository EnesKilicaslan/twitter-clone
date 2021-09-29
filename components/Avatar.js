import React from "react";
import styles from "./Avatar.module.css";

export const Avatar = ({ src, alt }) => {
  return (
    <div className={styles.imgContainer}>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  );
};
