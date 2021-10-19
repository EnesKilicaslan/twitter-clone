import React from "react";
import styles from "./ColumnSidebar.module.css";
import cn from "classnames";
import { Navigation, ProfileCard, ThemeButton } from "../components";
import { useRouter } from "next/router";

export const Sidebar = ({ isFlat, children }) => {
  const router = useRouter();

  return (
    <div className={cn(styles.sidebar)}>
      <Navigation isFlat={isFlat} selectedItem={router.asPath} />

      <div className={styles.tweet}>
        <ThemeButton isFullWidth={!isFlat} isLarge={!isFlat}>
          {isFlat ? "T" : "Tweet"}
        </ThemeButton>
      </div>
      <div className={styles.profile}>
        <ProfileCard isFlat={isFlat} />
      </div>
    </div>
  );
};
