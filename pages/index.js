import React from "react";
import { Layout, Sidebar, Main, Extra } from "../components";
import { useWindowSize } from "../hooks";
import { SCREEN_SIZE } from "../constants";

export const HomePage = () => {
  const size = useWindowSize();

  return (
    <Layout>
      <Sidebar isFlat={size.width < SCREEN_SIZE.TABLET}>sidebar</Sidebar>

      <Main>{JSON.stringify(size)}</Main>

      {size.width > SCREEN_SIZE.DESKTOP && <Extra>extra</Extra>}
    </Layout>
  );
};

export default HomePage;
