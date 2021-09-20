import React from "react";
import styles from "./TextTitle.module.css";
import cn from "classnames";

export const TextTitle = ({ isBold = true, children }) => {
  return (
    <h2 className={cn(styles.title, isBold && styles.titleBold)}>{children}</h2>
  );
};
