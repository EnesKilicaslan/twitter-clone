import React from "react";
import styles from "./Avatar.module.css";

export const Avatar = ({
  src = "https://pbs.twimg.com/profile_images/1312920774072770560/G_NfS1Mo_400x400.jpg",
  alt,
  size = 47,
}) => {
  return (
    <div className={styles.imgContainer} style={{ width: size, height: size }}>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  );
};
