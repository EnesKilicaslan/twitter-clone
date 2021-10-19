import React from "react";
import styles from "./NavButton.module.css";
import { Button } from "./Button";
import cn from "classnames";

export const NavButton = ({
  notificationCount,
  children,
  selected,
  className,
  ...props
}) => {
  return (
    <Button
      className={cn(
        styles.navButton,
        className,
        selected && styles.selectedNavButton
      )}
      {...props}
    >
      {notificationCount && (
        <span className={styles.notificationCount}>{notificationCount}</span>
      )}

      {children}
    </Button>
  );
};
