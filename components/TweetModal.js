import React from "react";
import styles from "./TweetModal.module.css";
import { Avatar, ThemeButton, Button } from "./";
import { Close, Media, Gif, Emoji, Question, Options } from "./icons";

export const TweetModal = ({ onClose = () => {} }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <Button onClick={onClose} className={styles.modalCloseButton}>
            <Close />
          </Button>
        </div>

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
              placeholder="What is happening?"
            />
            <div className={styles.modalFooter}>
              <div className={styles.footerIcons}>
                <Button className={styles.icon}>
                  <Media />
                </Button>

                <Button className={styles.icon}>
                  <Gif />
                </Button>

                <Button className={styles.icon}>
                  <Emoji />
                </Button>

                <Button className={styles.icon}>
                  <Question />
                </Button>

                <Button className={styles.icon}>
                  <Options />
                </Button>
              </div>

              <div className={styles.footerThemeButton}>
                <ThemeButton>Tweet</ThemeButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
