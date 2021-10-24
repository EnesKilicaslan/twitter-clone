import React from "react";

import styles from "./Navigation.module.css";
import { NavButton } from "./NavButton";
import { TextTitle } from "./TextTitle";
import { menuItems } from "../constants";
import cn from "classnames";

export const Navigation = ({ isFlat = false, selectedItem, ...props }) => {
  return (
    <nav className={styles.navigation}>
      {menuItems.map((item) => (
        <NavButton
          selected={item.link === selectedItem}
          notificationCount={item.notification}
          key={item.name}
          link={item.link}
          className={cn(styles.navigationButton, item.name)}
        >
          {item.component}
          {item.title && !isFlat && <TextTitle>{item.title}</TextTitle>}
        </NavButton>
      ))}
    </nav>
  );
};
