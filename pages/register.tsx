import React from "react";
import RegisterForm from "../components/RegisterFrom";

interface registerProps {
  children?: React.ReactNode;
}

const register: React.FC<registerProps> = ({}) => {
  const handleRegister = (username: string, password: string, email: string, firstname: string, lastname: string) => {
    console.log({ username, password, email, firstname, lastname });
  };

  return (
    <>
      <RegisterForm onSubmit={handleRegister} />
    </>
  );
};
export default register;
