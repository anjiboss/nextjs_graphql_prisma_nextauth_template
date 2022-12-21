import React from "react";
import Button from "./Button";
import { useRouter } from "next/router";

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(username, password);
  };
  return (
    <form onSubmit={handleSubmit} className="w-1/2 bg-white shadow-md rounded px-8 pt-6 pb-8 my-12 mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-center">
        <Button type="submit" className="w-5/6 m-5 bg-green-500 hover:bg-green-700">
          Sign In
        </Button>
      </div>
      <div className="flex items-center justify-center">
        <Button type="submit" className="w-5/6  m-5" onClick={() => router.push("/register")}>
          Register
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 m-5" href="#">
          Forgot Password?
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
