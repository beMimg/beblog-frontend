import { useState } from "react";

async function loginUser(credentials) {
  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    return data;
  } catch (err) {
    throw err;
  }
}

export default function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

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
      setToken(data);
      return;
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
