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
    component: <Twitter style={{ fontSize: 30 }} />,
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
