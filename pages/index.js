import React from "react";
import { Layout, Tweet, Loading } from "../components";
import { data } from "./db/tweets";

export const HomePage = ({ data }) => {
  // const { data } = useSWR("/api/tweet", Fetcher);

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

export async function getStaticProps(context) {
  // return data

  // const data = [];

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default HomePage;
