import { useState } from "react";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form>
        <label htmlFor="username">Name:</label>
        <input type="text" name="username" required />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" required />
      </form>
    </div>
  );
}
