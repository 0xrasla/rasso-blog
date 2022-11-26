import type { NextPage } from "next";
import prisma from "../lib/prismaclient";

const Home: NextPage = () => {
  return <div className="main">Hello World</div>;
};

export default Home;
