import React, { useState } from "react";
import Image from "next/image";
import styles from "./Avatar.module.css";
import AvatarPhoto from "../images/avatar-default.png";
import useSWR from "swr";

export const Avatar = ({ src, alt, size = 47 }) => {
  const [error, setError] = useState(false);

  return (
    <div className={styles.imgContainer}>
      <Image
        className={styles.img}
        src={src && !error ? src : AvatarPhoto}
        alt={alt}
        width={size}
        height={size}
        onError={() => {
          setError(true);
        }}
      />
    </div>
  );
};
