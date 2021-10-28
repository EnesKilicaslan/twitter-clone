import React from "react";
import styles from "./Tweet.module.css";
import { Avatar, Button } from "./";
import { Reply, Retweet, Like, Share } from "./icons";
import { formatDistanceToNow } from "date-fns";

export const Tweet = ({
  created_at,
  reply_count,
  retweet_count,
  favorite_count,
  favorited,
  text,
  user,
}) => {
  return (
    <article className={styles.tweet}>
      <div className={styles.avatar}>
        <Avatar src={user.profile_image_url} />
      </div>
      <div className={styles.contentContainer}>
        <header className={styles.contentHeader}>
          <span className={styles.name}>
            {user.name} {"  "}
          </span>
          <span className={styles.slug}>
            @{user.screen_name}
            {"  "}
          </span>{" "}
          {"  "}·{"  "}
          {created_at && (
            <span className={styles.dateTime}>
              {formatDistanceToNow(new Date(created_at))}
            </span>
          )}
        </header>

        <div className={styles.content}>{text}</div>
        <footer className={styles.actionIcons}>
          <div className={styles.actionIconItem}>
            <Button className={styles.actionIconItemButton}>
              <Reply />
            </Button>
            {reply_count && (
              <span className={styles.actionIconItemNumber}>{reply_count}</span>
            )}
          </div>

          <div className={styles.actionIconItem}>
            <Button className={styles.actionIconItemButton}>
              <Retweet />
            </Button>
            {retweet_count && (
              <span className={styles.actionIconItemNumber}>
                {retweet_count}
              </span>
            )}
          </div>

          <div className={styles.actionIconItem}>
            <Button className={styles.actionIconItemButton}>
              <Like />
            </Button>
            {favorite_count && (
              <span className={styles.actionIconItemNumber}>
                {favorite_count}
              </span>
            )}
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
