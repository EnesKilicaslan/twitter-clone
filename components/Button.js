import React from "react";
import styles from "./Button.module.css";
import cn from "classnames";

export const Button = ({
  children,
  className,
  isFullWidth = false,
  ...props
}) => {
  return (
    <button
      type="button"
      className={cn(styles.button, isFullWidth && styles.fullWidth, className)}
      {...props}
    >
      {children}
    </button>
  );
};
