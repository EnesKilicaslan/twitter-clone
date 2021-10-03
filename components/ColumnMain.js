import React from "react";
import styles from "./ColumnMain.module.css";
import cn from "classnames";

export const Main = ({ children }) => {
  return <div className={cn(styles.main)}> {children}</div>;
};
