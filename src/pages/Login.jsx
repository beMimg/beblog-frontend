import { useState } from "react";
import { useAuth } from "../context/authProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

async function loginUser(credentials) {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/login",
      credentials,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

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
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Name:</label>
        <input
          type="text"
          name="username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <div>{errors && <p>{errors}</p>}</div>
    </div>
  );
}
