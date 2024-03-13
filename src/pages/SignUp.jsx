import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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
      setErrors(data.errors);
      window.scrollTo(0, document.body.scrollHeight);
    } else {
      <p>sucess</p>;
      navigate("/login", { replace: true });
      return;
    }
  }

  return (
    <div className="relative flex flex-1 flex-col items-center justify-center gap-4 p-4 lg:w-[960px] lg:gap-8 lg:self-center">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-lg font-bold">Sign Up</h1>
        <p className="text-center text-sm">
          Let's get started. View posts and comment by creating an account.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
        <input
          type="text"
          name="first_name"
          required
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
          className={`inputStyleDefault`}
        />
        <input
          type="text"
          name="last_name"
          required
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last name"
          className={`inputStyleDefault`}
        />
        <input
          type="email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={`inputStyleDefault`}
        />
        <input
          type="text"
          name="username"
          required
          minLength={4}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className={`inputStyleDefault`}
        />
        <input
          type="password"
          name="password"
          minLength={6}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className={`inputStyleDefault`}
        />
        <input
          type="password"
          name="password_confirmation"
          minLength={6}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          placeholder="Password confirmation"
          className={`inputStyleDefault`}
        />
        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 p-2 text-white"
        >
          Sign Up
        </button>
      </form>
      <p className="text-center text-sm">
        By signing up to create an account you accept Terms that you're an
        incredible person.
      </p>
      <p className="text-gray-500">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 underline">
          Log In
        </Link>
      </p>
      <ul className="bottom-10 ml-4 list-disc lg:absolute lg:text-lg">
        {errors &&
          errors.map((error) => (
            <li key={error.msg} className="text-xs text-red-600 lg:text-[15px]">
              {error.msg}
            </li>
          ))}
      </ul>
    </div>
  );
}
