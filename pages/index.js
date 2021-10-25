import React from "react";
import { Layout, Tweet } from "../components";

export const HomePage = () => {
  return (
    <Layout>
      <Tweet
        name="Enes Kilicaslan"
        slug="eneski"
        dateTime={new Date(2021, 4, 10)}
        content={`Not following your trading plan asdasd asd asdasd d
      sad
asdds`}
      />
      <Tweet
        name="Enes Kilicaslan"
        slug="eneski"
        dateTime={new Date(2021, 9, 23)}
        content={`Not following your trading plan asdasd asd asdasd d
      sad
asdds`}
      />
    </Layout>
  );
};

export default HomePage;
