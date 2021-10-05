import React from "react";
import styles from "./Avatar.module.css";

export const Avatar = ({ src, alt, size = 47 }) => {
  return (
    <div className={styles.imgContainer} style={{ width: size, height: size }}>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  );
};
