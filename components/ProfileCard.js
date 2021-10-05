import React from "react";
import { Avatar, Button, TextBody } from ".";
import { ArrowBottom } from "./icons";
import styles from "./ProfileCard.module.css";
import cn from "classnames";

export const ProfileCard = ({ src, alt, isFlat }) => {
  return (
    <Button className={styles.card}>
      <Avatar
        src="https://pbs.twimg.com/profile_images/1312920774072770560/G_NfS1Mo_400x400.jpg"
        alt="enes"
        size={isFlat ? 39 : 47}
      />
      {!isFlat && (
        <>
          <div className={styles.cardBody}>
            <TextBody isBold={true} className={styles.bodyItem}>
              Enes Kasd
            </TextBody>
            <TextBody className={cn(styles.bodyItem, styles.slug)}>
              @asdadsads
            </TextBody>
          </div>

          <ArrowBottom className={styles.icon} />
        </>
      )}
    </Button>
  );
};
