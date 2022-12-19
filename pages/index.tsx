import { gql, useMutation, useQuery } from "@apollo/client";
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

const ADD_USER = gql`
  mutation Example($name: String, $email: String!, $image: String) {
    addUser(name: $name, email: $email, image: $image)
  }
`;

const Home: NextPage<Session> = ({}) => {
  const [mutateFunction] = useMutation(ADD_USER);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
    }
  }, [session, status]);

  return (
    <>
      {session && (
        <button
          onClick={() => {
            mutateFunction({
              variables: {
                email: session.user?.email,
                name: session.user?.name,
                image: session.user?.image,
              },
            });
          }}
        >
          Add User
        </button>
      )}
      <LoginBtn />
    </>
  );
};

export default Home;
