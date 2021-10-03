import React from "react";
import { Layout, Sidebar, Main, Extra } from "../components";
import { useWindowSize } from "../hooks";
import { SCREEN_SIZE } from "../constants";

export const HomePage = () => {
  const size = useWindowSize();

  return (
    <Layout>
      <Sidebar isFlat={size.width < SCREEN_SIZE.DESKTOP}>sidebar</Sidebar>

      <Main>main</Main>

      {size.width > SCREEN_SIZE.TABLET && <Extra>extra</Extra>}
    </Layout>
  );
};

export default HomePage;
