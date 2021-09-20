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

export const Navigation = ({ selectedItem, ...props }) => {
  return (
    <nav className={styles.navigation}>
      <NavButton>
        <Twitter />
      </NavButton>

      <NavButton selected={selectedItem === "home"}>
        <Home />
        <TextTitle>Home</TextTitle>
      </NavButton>

      <NavButton selected={selectedItem === "explore"}>
        <Explore />
        <TextTitle>Explore</TextTitle>
      </NavButton>

      <NavButton
        selected={selectedItem === "notification"}
        notificationCount={15}
      >
        <Notification />
        <TextTitle>Notification</TextTitle>
      </NavButton>

      <NavButton selected={selectedItem === "messages"}>
        <Messages />
        <TextTitle>Messages</TextTitle>
      </NavButton>

      <NavButton selected={selectedItem === "bookmark"}>
        <Bookmark />
        <TextTitle>Bookmark</TextTitle>
      </NavButton>

      <NavButton selected={selectedItem === "lists"}>
        <Lists />
        <TextTitle>Lists</TextTitle>
      </NavButton>

      <NavButton selected={selectedItem === "profile"}>
        <Profile />
        <TextTitle>Profile</TextTitle>
      </NavButton>

      <NavButton selected={selectedItem === "more"}>
        <More />
        <TextTitle>More</TextTitle>
      </NavButton>
    </nav>
  );
};
