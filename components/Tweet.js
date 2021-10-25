import React from "react";
import styles from "./Tweet.module.css";
import { Avatar, Button } from "./";
import { Reply, Retweet, Like, Share } from "./icons";
import { formatDistanceToNow } from "date-fns";

export const Tweet = ({ name, slug, dateTime, content }) => {
  return (
    <article className={styles.tweet}>
      <div className={styles.avatar}>
        <Avatar />
      </div>
      <div className={styles.contentContainer}>
        <header className={styles.contentHeader}>
          <span className={styles.name}>
            {name} {"  "}
          </span>
          <span className={styles.slug}>
            @{slug}
            {"  "}
          </span>{" "}
          {"  "}·{"  "}
          {dateTime && (
            <span className={styles.dateTime}>
              {formatDistanceToNow(dateTime)}
            </span>
          )}
        </header>

        <div className={styles.content}>{content}</div>
        <footer className={styles.actionIcons}>
          <div className={styles.actionIconItem}>
            <Button className={styles.actionIconItemButton}>
              <Reply />
            </Button>
            <span className={styles.actionIconItemNumber}>3</span>
          </div>

          <div className={styles.actionIconItem}>
            <Button className={styles.actionIconItemButton}>
              <Retweet />
            </Button>
            <span className={styles.actionIconItemNumber}>12</span>
          </div>

          <div className={styles.actionIconItem}>
            <Button className={styles.actionIconItemButton}>
              <Like />
            </Button>
          </div>

          <div className={styles.actionIconItem}>
            <Button className={styles.actionIconItemButton}>
              <Share />
            </Button>
          </div>
        </footer>
      </div>
    </article>
  );
};
