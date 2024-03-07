import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../context/authProvider";
export default function Layout() {
  const { token } = useAuth();
  console.log(token);

  return (
    <div>
      <header>
        <nav>
          {token ? (
            <>
              <Link to="/posts">Posts</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/about-us">About</Link>
            </>
          ) : (
            <>
              <Link to="/sign-up">Sign Up</Link>
              <Link to="/login">Login</Link>
              <Link to="/about-us">About</Link>
            </>
          )}
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
