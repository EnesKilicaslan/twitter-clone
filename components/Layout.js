import React from "react";
import styles from "./Layout.module.css";
import cn from "classnames";

export const Layout = ({ children }) => {
  return <div className={cn(styles.layout)}> {children}</div>;
};
