import { useState } from "react";
import { useAuth } from "../context/authProvider";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import api_domain from "../functions/api_domain";

async function loginUser(credentials) {
  try {
    const response = await axios.post(`${api_domain}api/login`, credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (err) {
    return err.response.data;
  }
}

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const { setToken } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await loginUser({
      username,
      password,
    });
    if (data.error) {
      setErrors(data.error);
      return;
    } else {
      setToken(data.token);
      navigate("/", { replace: true });
      // Force page reload to make sure User is fetched with recieved Token.
      window.location.reload();
    }
  }

  return (
    <div className="relative flex flex-1 flex-col items-center justify-center gap-6 p-4 lg:w-[70%] lg:self-center 2xl:w-[60%]">
      <h1 className="text-lg font-bold lg:text-3xl">Log In</h1>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
        <input
          type="text"
          name="username"
          required
          onChange={(e) => setUsername(e.target.value)}
          className="inputStyleDefault"
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="inputStyleDefault"
        />
        <button
          className="w-full rounded-md bg-blue-600 p-2 text-white lg:text-xl"
          type="submit"
        >
          Login
        </button>
      </form>
      <p className="text-center text-gray-500">
        <Link to="/sign-up" className="text-blue-600 underline">
          Create a free account
        </Link>{" "}
        or log in to start using beBlog
      </p>
      <ul className="bottom-10 ml-4 list-disc lg:absolute lg:text-lg">
        {errors && (
          <li className="text-xs text-red-600 lg:text-[15px]">{errors}</li>
        )}
      </ul>
    </div>
  );
}
