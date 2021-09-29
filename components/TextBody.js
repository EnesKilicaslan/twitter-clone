import React from "react";
import styles from "./TextBody.module.css";
import cn from "classnames";

export const TextBody = ({ isBold = false, className, children, ...props }) => {
  return (
    <p
      className={cn(styles.body, isBold && styles.bodyBold, className)}
      {...props}
    >
      {children}
    </p>
  );
};
