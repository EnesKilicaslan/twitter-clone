import React from "react";
import { Layout, Tweet, Loading } from "../components";
import useSWR from "swr";
import Fetcher from "../libs/Fetcher";

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
  const res = await fetch("/api/tweet");
  const data = await res.json();

  // return data

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default HomePage;
