import React from "react";
import styles from "./TweetModal.module.css";
import { Avatar } from "./";

export const TweetModal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>........</div>

        <div className={styles.modalContent}>
          <div className={styles.avatar}>
            <Avatar />
          </div>
          <div className={styles.modalContentContainer}>
            <textarea
              name="sendTweet"
              cols="30"
              rows="6"
              className={styles.tweetText}
            />
          </div>
        </div>

        <div className={styles.modalFooter}></div>
      </div>
    </div>
  );
};
