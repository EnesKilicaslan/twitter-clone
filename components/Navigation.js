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

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavButton>
        <Twitter />
      </NavButton>

      <NavButton>
        <Home />
        <TitleBold>Home</TitleBold>
      </NavButton>

      <NavButton>
        <Explore />
        <TitleBold>Explore</TitleBold>
      </NavButton>

      <NavButton>
        <Notification />
        <TitleBold>Notification</TitleBold>
      </NavButton>

      <NavButton>
        <Messages />
        <TitleBold>Messages</TitleBold>
      </NavButton>

      <NavButton>
        <Bookmark />
        <TitleBold>Bookmark</TitleBold>
      </NavButton>

      <NavButton>
        <Lists />
        <TitleBold>Lists</TitleBold>
      </NavButton>

      <NavButton>
        <Profile />
        <TitleBold>Profile</TitleBold>
      </NavButton>

      <NavButton>
        <More />
        <TitleBold>More</TitleBold>
      </NavButton>
    </nav>
  );
};
