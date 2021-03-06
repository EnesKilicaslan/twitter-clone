import React, { useState } from "react";
import Image from "next/image";
import styles from "./Avatar.module.css";
// import AvatarPhoto from "../public/images/avatar-default.png";
import { imageLoader } from "../helpers";

export const Avatar = ({ src, alt, size = 47 }) => {
  const [error, setError] = useState(false);
  const isRemoteImg = src && !error;

  return (
    <div className={styles.imgContainer}>
      <Image
        loader={imageLoader}
        className={styles.img}
        src={isRemoteImg ? src : "images/avatar-default.png"}
        alt={alt}
        width={size}
        height={size}
        onError={() => {
          setError(true);
        }}
        unoptimized={true}
        quality={isRemoteImg}
      />
    </div>
  );
};
