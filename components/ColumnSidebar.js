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

export const Sidebar = ({ isFlat, children }) => {
  const [tweetModal, setTweetModal] = useState(false);
  const router = useRouter();

  const openTweetModal = () => {
    document.querySelector("html").classList.add("no-scroll");
    setTweetModal(true);
  };

  const closeTweetModal = () => {
    document.querySelector("html").classList.remove("no-scroll");
    setTweetModal(false);
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

      {tweetModal && <TweetModal onClose={closeTweetModal} />}
      <div className={styles.profile}>
        <ProfileCard isFlat={isFlat} />
      </div>
    </div>
  );
};
