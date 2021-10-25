import React from "react";
import styles from "./Layout.module.css";
import cn from "classnames";

import { useWindowSize } from "../hooks";
import { SCREEN_SIZE } from "../constants";

import { Sidebar, Main, Extra } from "../components";

export const Layout = ({ children }) => {
  const size = useWindowSize();

  return (
    <div className={cn(styles.layout)}>
      <Sidebar isFlat={size.width < SCREEN_SIZE.TABLET}>sidebar</Sidebar>

      <Main>{children}</Main>

      {size.width > SCREEN_SIZE.DESKTOP && (
        <Extra>{JSON.stringify(size.width > SCREEN_SIZE.DESKTOP)}</Extra>
      )}
    </div>
  );
};
