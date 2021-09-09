import React from "react";
import styles from "./NavButton.module.css";

export const NavButton = ({ children, ...props }) => {
  return (
    <button className={styles.navButton} {...props}>
      {children}
    </button>
  );
};
