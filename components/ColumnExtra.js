import React from "react";
import styles from "./ColumnExtra.module.css";
import cn from "classnames";
import { useWindowSize } from "../hooks";

export const Extra = ({ children }) => {
  const size = useWindowSize();
  return (
    <div className={cn(styles.extra)}>
      --{window.innerWidth}
      ---{children}
      -------
      {JSON.stringify(size)}
    </div>
  );
};
