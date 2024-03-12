import { Link } from "react-router-dom";
import { useAuth } from "../context/authProvider";

export default function Nav() {
  const { token } = useAuth();

  return (
    <nav className=" flex flex-row justify-between lg:justify-around">
      <Link to="/" className=" text-2xl font-semibold ">
        beBlog
      </Link>
      {token ? (
        <div className="lg:text-md flex flex-row items-center gap-6 text-sm">
          <Link to="/posts">Posts</Link>
          <Link to="/user-profile">Profile</Link>
          <Link to="/about-us">About</Link>
        </div>
      ) : (
        <div className="lg:text-md flex flex-row items-center justify-center gap-6 text-center text-sm">
          <Link to="/posts">Posts</Link>
          <Link to="/sign-up">Sign Up</Link>
          <Link to="/login">Login</Link>
          <Link to="/about-us">About</Link>
        </div>
      )}
    </nav>
  );
}
