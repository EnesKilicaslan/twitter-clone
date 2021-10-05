import React from "react";
import styles from "./ColumnSidebar.module.css";
import cn from "classnames";
import { Navigation, ProfileCard, ThemeButton } from "../components";

export const Sidebar = ({ isFlat, children }) => {
  return (
    <div className={cn(styles.sidebar)}>
      <Navigation isFlat={isFlat} selectedItem="home" />

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
