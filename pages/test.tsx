import { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";

const Test: NextPage = () => {
  const { data: session, status } = useSession();

  return (
    <>
      <h1>Test</h1>
      {status === "authenticated" && (
        <>
          <p>Signed in as {session.user?.email}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  );
};

export default Test;
