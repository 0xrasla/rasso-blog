import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blogger Clone Using Next.js, Graphql and Mongodb</title>
        <meta name="description" content="Coded By 0xRasla" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>Hello World!</Main>
    </div>
  );
};

const Main = styled.main`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }
`;

export default Home;
