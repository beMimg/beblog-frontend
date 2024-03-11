import { Link } from "react-router-dom";
import { useAuth } from "../context/authProvider";

export default function Nav() {
  const { token } = useAuth();

  return (
    <nav className=" flex flex-row justify-between ">
      <Link to="/" className=" font-bold ">
        beBlog
      </Link>
      {token ? (
        <div className="flex flex-row items-center gap-6 text-sm">
          <Link to="/posts">Posts</Link>
          <Link to="/user-profile">Profile</Link>
          <Link to="/about-us">About</Link>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center gap-6 text-center text-sm">
          <Link to="/posts">Posts</Link>
          <Link to="/sign-up">Sign Up</Link>
          <Link to="/login">Login</Link>
          <Link to="/about-us">About</Link>
        </div>
      )}
    </nav>
  );
}
