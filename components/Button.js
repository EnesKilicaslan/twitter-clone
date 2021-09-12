import React from "react";
import styles from "./Button.module.css";

export const Button = ({ children, ...props }) => {
  return (
    <button type="button" className={styles.twitterButton} {...props}>
      {children}
    </button>
  );
};
