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
} from "../components/icons";

export const menuItems = [
  {
    name: "twitter",
    link: "/",
    component: <Twitter style={{ fontSize: 30, color: "white" }} />,
  },
  {
    name: "home",
    link: "/",
    component: <Home />,
    title: "Home",
  },
  {
    name: "explore",
    link: "/explore",
    component: <Explore />,
    title: "Explore",
  },

  {
    name: "notifications",
    link: "/notifications",
    component: <Notification />,
    title: "Notifications",
    notification: 15,
  },
  {
    name: "messages",
    link: "/messages",
    component: <Messages />,
    title: "Messages",
  },
  {
    name: "bookmarks",
    link: "/bookmarks",
    component: <Bookmark />,
    title: "Bookmarks",
  },

  {
    name: "lists",
    link: "/lists",
    component: <Lists />,
    title: "Lists",
  },
  {
    name: "profile",
    link: "/profile",
    component: <Profile />,
    title: "Profile",
  },
  {
    name: "more",
    link: "/more",
    component: <More />,
    title: "More",
  },
];
