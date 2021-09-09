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

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavButton>
        <Twitter />
      </NavButton>

      <NavButton>
        <Home />
        <span>Home</span>
      </NavButton>

      <NavButton>
        <Explore />
        <span>Explore</span>
      </NavButton>

      <NavButton>
        <Notification />
        <span>Notification</span>
      </NavButton>

      <NavButton>
        <Messages />
        <span>Messages</span>
      </NavButton>

      <NavButton>
        <Bookmark />
        <span>Bookmark</span>
      </NavButton>

      <NavButton>
        <Lists />
        <span>Lists</span>
      </NavButton>

      <NavButton>
        <Profile />
        <span>Profile</span>
      </NavButton>

      <NavButton>
        <More />
        <span>More</span>
      </NavButton>
    </nav>
  );
};
