import React from "react";
import styles from "./ColumnExtra.module.css";
import cn from "classnames";

export const Extra = ({ children }) => {
  return <div className={cn(styles.extra)}> {children}</div>;
};
