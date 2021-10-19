import React from "react";
import { Layout, Sidebar, Main, Extra } from "../components";
import { useWindowSize } from "../hooks";
import { SCREEN_SIZE } from "../constants";

export const NotificationsPage = () => {
  const size = useWindowSize();

  return <Layout>Notifications</Layout>;
};

export default NotificationsPage;
