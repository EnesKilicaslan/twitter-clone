import React from "react";
import styles from "./Navigation.module.css";
import {
  Twitter,
  Home,
  Explore,
  Notification,
  Messages,
  Bookmark,
  Lists,
  Profile,
  More,
} from "./icons";

import { NavButton } from "./NavButton";
import { TextTitle } from "./TextTitle";

const menuItems = [
  {
    name: "twitter",
    component: <Twitter />,
  },
  {
    name: "home",
    component: <Home />,
    title: "Home",
  },
  {
    name: "explore",
    component: <Explore />,
    title: "Explore",
  },

  {
    name: "notification",
    component: <Notification />,
    title: "Notification",
    notification: 15,
  },
  {
    name: "messages",
    component: <Messages />,
    title: "Messages",
  },
  {
    name: "bookmark",
    component: <Bookmark />,
    title: "Bookmark",
  },

  {
    name: "lists",
    component: <Lists />,
    title: "Lists",
  },
  {
    name: "profile",
    component: <Profile />,
    title: "Profile",
  },
  {
    name: "more",
    component: <More />,
    title: "More",
  },
];

export const Navigation = ({ isFlat = false, selectedItem, ...props }) => {
  return (
    <nav className={styles.navigation}>
      {menuItems.map((item) => (
        <NavButton
          selected={item.name === selectedItem}
          notificationCount={item.notification}
          key={item.name}
        >
          {item.component}
          {item.title && !isFlat && <TextTitle>{item.title}</TextTitle>}
        </NavButton>
      ))}
    </nav>
  );
};
