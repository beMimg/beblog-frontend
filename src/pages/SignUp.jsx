import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

async function SignUpUser(credentials) {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/users",
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

export default function SignUp() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  if (isSubmitting) {
    return <p>Submitting</p>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await SignUpUser({
      first_name,
      last_name,
      email,
      username,
      password,
      password_confirmation,
    });
    if (data.errors) {
      return setErrors(data.errors);
    } else {
      <p>sucess</p>;
      navigate("/login", { replace: true });
      return;
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="first name">First Name:</label>
          <input
            type="text"
            name="first_name"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            name="last_name"
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            required
            minLength={4}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            minLength={6}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password confirmation">Password Confirmation:</label>
          <input
            type="password"
            name="password_confirmation"
            minLength={6}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <ul>
        {errors && errors.map((error) => <li key={error.msg}>{error.msg}</li>)}
      </ul>
    </div>
  );
}
