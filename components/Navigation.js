import React from "react";

import styles from "./Navigation.module.css";
import { NavButton } from "./NavButton";
import { TextTitle } from "./TextTitle";
import { menuItems } from "../constants";

export const Navigation = ({ isFlat = false, selectedItem, ...props }) => {
  return (
    <nav className={styles.navigation}>
      {menuItems.map((item) => (
        <NavButton
          selected={item.name === selectedItem}
          notificationCount={item.notification}
          key={item.name}
          link={item.link}
          className={styles.navigationButton}
        >
          {item.component}
          {item.title && !isFlat && <TextTitle>{item.title}</TextTitle>}
        </NavButton>
      ))}
    </nav>
  );
};
