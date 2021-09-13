import React from "react";
import styles from "./NavButton.module.css";
import { Button } from "./Button";

export const NavButton = ({ children, ...props }) => {
  return (
    <Button className={styles.navButton} {...props}>
      {children}
    </Button>
  );
};
