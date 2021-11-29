import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Nav = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav>
      <ul>
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}

        {user && (
          <>
            <span className="welcome">
              {" "}
              Welcome, {user.displayName} {user.email}
            </span>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pictures">Pictures</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/map">Map</Link>
            </li>
            <li>
              <button className="logoutbtn" onClick={logout}>
                <span>Logout</span>
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
