import { NextPage } from "next";
import { Session } from "next-auth";
import { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Button from "../components/Button";

const Home: NextPage<Session> = ({}) => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  return (
    <>
      {status === "authenticated" && (
        <p>
          <Button onClick={() => signOut()}>Sign Out</Button>
        </p>
      )}
    </>
  );
};

export default Home;
