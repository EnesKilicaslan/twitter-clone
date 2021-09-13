import React from "react";
import styles from "./Button.module.css";
import cn from "classnames";

export const Button = ({ children, className, ...props }) => {
  return (
    <button
      type="button"
      className={cn(styles.twitterButton, className)}
      {...props}
    >
      {children}
    </button>
  );
};
