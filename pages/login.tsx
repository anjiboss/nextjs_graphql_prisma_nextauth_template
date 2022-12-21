import { NextPage } from "next";
import LoginForm from "../components/LoginForm";

const Login: NextPage = () => {
  const handleLogin = (username: string, password: string) => {
    console.log({ username, password });
  };

  return (
    <>
      <LoginForm onSubmit={handleLogin} />
    </>
  );
};

export default Login;
