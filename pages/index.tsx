import { gql, useQuery } from "@apollo/client";
import { NextPage } from "next";
import { Session } from "next-auth";
import { useEffect } from "react";
import LoginBtn from "../components/LoginBtn";
import { useSession } from "next-auth/react";

const HELLO_QUERY = gql`
  query Hello {
    hello
  }
`;

const Home: NextPage<Session> = ({}) => {
  const { data, loading } = useQuery(HELLO_QUERY);
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log({
      session,
      status,
    });
  }, [session, status]);

  return (
    <>
      <h1>Hello {loading ? "Loading..." : data.hello}</h1>
      <LoginBtn />
    </>
  );
};

export default Home;
