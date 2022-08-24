import type { NextPage } from "next";
import { gql, useQuery } from "@apollo/client";
import client from "../lib/gqlclient";

const Home: NextPage = () => {

    const query = gql`
      query getauthor($id: Float!) {
        author(id: $id) {
          firstName
          lastName
          id
          isActive
        }
      }
    `
  const {data : {author}} =  useQuery(query, {
    variables: { id: 4 },
  })

  console.log(author)
  
  return <div className="main">Hello</div>;
};

export default Home;
