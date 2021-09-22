import React from "react";
import styles from "./Stack.module.css";
import cn from "classnames";

export const Stack = ({ gap = 10, isColumn, children }) => {
  console.log("stack ", isColumn);
  return (
    <div
      className={cn(styles.stack, isColumn && styles.column)}
      style={{ "--gap": `${gap}px` }}
    >
      {children}
    </div>
    // <button
    //   type="button"
    //   className={cn(styles.button, isFullWidth && styles.fullWidth, className)}
    //   {...props}
    // >
    //   {children}
    // </button>
  );
};
