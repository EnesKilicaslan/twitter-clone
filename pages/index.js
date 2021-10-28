import React from "react";
import { Layout, Tweet, Loading } from "../components";
import useSWR from "swr";
import Fetcher from "../libs/Fetcher";

export const HomePage = () => {
  const { data } = useSWR("/api/tweet", Fetcher);

  return (
    <Layout>
      {!data ? (
        <Loading />
      ) : (
        data.map((tweet) => <Tweet key={tweet.id} {...tweet} />)
      )}
    </Layout>
  );
};

export default HomePage;
