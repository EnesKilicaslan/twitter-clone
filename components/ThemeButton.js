import React from "react";
import styles from "./ThemeButton.module.css";
import { Button } from "./Button";
import cn from "classnames";

export const ThemeButton = ({
  children,
  isFullWidth = false,
  isLarge = false,
  ...props
}) => {
  return (
    <Button
      className={cn(styles.themeButton, isLarge && styles.largeThemeButton)}
      isFullWidth={isFullWidth}
      {...props}
    >
      {children}
    </Button>
  );
};
