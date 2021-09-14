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
import { TitleBold } from "./TitleBold";

export const Navigation = ({ selectedItem, ...props }) => {
  return (
    <nav className={styles.navigation}>
      <NavButton>
        <Twitter />
      </NavButton>

      <NavButton selected={selectedItem === "home"}>
        <Home />
        <TitleBold>Home</TitleBold>
      </NavButton>

      <NavButton selected={selectedItem === "explore"}>
        <Explore />
        <TitleBold>Explore</TitleBold>
      </NavButton>

      <NavButton selected={selectedItem === "notification"}>
        <Notification />
        <TitleBold>Notification</TitleBold>
      </NavButton>

      <NavButton selected={selectedItem === "messages"}>
        <Messages />
        <TitleBold>Messages</TitleBold>
      </NavButton>

      <NavButton selected={selectedItem === "bookmark"}>
        <Bookmark />
        <TitleBold>Bookmark</TitleBold>
      </NavButton>

      <NavButton selected={selectedItem === "lists"}>
        <Lists />
        <TitleBold>Lists</TitleBold>
      </NavButton>

      <NavButton selected={selectedItem === "profile"}>
        <Profile />
        <TitleBold>Profile</TitleBold>
      </NavButton>

      <NavButton selected={selectedItem === "more"}>
        <More />
        <TitleBold>More</TitleBold>
      </NavButton>
    </nav>
  );
};
