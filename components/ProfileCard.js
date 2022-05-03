import React from "react";
import { Avatar, Button, TextBody } from ".";
import { ArrowBottom } from "./icons";
import styles from "./ProfileCard.module.css";
import cn from "classnames";

export const ProfileCard = ({ src, alt, isFlat }) => {
  return (
    <Button className={styles.card}>
      <Avatar src={src} alt={alt} size={isFlat ? 39 : 47} />
      {!isFlat && (
        <>
          <div className={styles.cardBody}>
            <TextBody isBold={true} className={styles.bodyItem}>
              Enes K.
            </TextBody>
            <TextBody className={cn(styles.bodyItem, styles.slug)}>
              @eeneski
            </TextBody>
          </div>

          <ArrowBottom className={styles.icon} />
        </>
      )}
    </Button>
  );
};
