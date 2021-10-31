import React, { useState } from "react";
import styles from "./ColumnSidebar.module.css";
import cn from "classnames";
import {
  Navigation,
  ProfileCard,
  ThemeButton,
  TweetModal,
} from "../components";
import { useRouter } from "next/router";
import { root } from "postcss";

export const Sidebar = ({ isFlat, children }) => {
  const [tweetModal, setTweetModal] = useState(false);
  const router = useRouter();

  const openTweetModal = () => {
    const $root = document.querySelector("html").classList.add("no-scroll");
    setTweetModal(true);
  };

  const closeTweetModal = () => {
    const $root = document.querySelector("html").classList.remove("no-scroll");
  };

  return (
    <div className={cn(styles.sidebar)}>
      <Navigation isFlat={isFlat} selectedItem={router.asPath} />
      <div className={styles.tweet}>
        <ThemeButton
          isFullWidth={!isFlat}
          isLarge={!isFlat}
          onClick={openTweetModal}
        >
          {isFlat ? "T" : "Tweet"}
        </ThemeButton>
      </div>

      {tweetModal && <TweetModal />}
      <div className={styles.profile}>
        <ProfileCard isFlat={isFlat} />
      </div>
    </div>
  );
};
