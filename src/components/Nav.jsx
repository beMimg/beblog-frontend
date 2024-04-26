import { Link } from "react-router-dom";
import { useAuth } from "../context/authProvider";

export default function Nav() {
  const { token } = useAuth();

  return (
    <nav className="flex w-full flex-row justify-between lg:w-[70%] lg:py-3 2xl:w-[60%]">
      <Link
        to="/"
        className=" text-2xl font-semibold transition duration-700 lg:text-3xl "
      >
        beBlog
      </Link>
      {token ? (
        <div className="flex flex-row items-center gap-6 text-sm lg:text-base ">
          <Link to="/posts" className="transitionsNavLinks">
            Posts
          </Link>
          <Link to="/user-profile" className="transitionsNavLinks">
            Profile
          </Link>
          <Link to="/about-us" className="transitionsNavLinks">
            About
          </Link>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center gap-6 text-center text-sm lg:text-base">
          <Link to="/posts" className="transitionsNavLinks">
            Posts
          </Link>
          <Link to="/sign-up" className="transitionsNavLinks">
            Sign Up
          </Link>
          <Link to="/login" className="transitionsNavLinks">
            Login
          </Link>
          <Link to="/about-us" className="transitionsNavLinks">
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
