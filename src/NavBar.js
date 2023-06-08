import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
// import userContext from "./userContext";


// import "./Navbar.css";

/** NavBar component.
 *
 * App -> NavBar
 *
 * Renders links to home, companies, and jobs
 */
//TODO: see if we can make NavLink active
function NavBar() {

  // const { user } = useContext(userContext);

  function loggedInNav() {
    return (
      <ul className="navbar-nav ms-auto">
        <li className="nav-item me-4">
          <NavLink className="nav-link" to="/listings/create">
            Create Listing
          </NavLink>
        </li>
        {/* <li className="nav-item me-4">
          <NavLink className="nav-link" to="/profile">
            Profile
          </NavLink>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Log out
          </Link>
        </li>
      </ul>
    );
  }

  function loggedOutNav() {
    return (
      <ul className="navbar-nav ms-auto">
        <li className="nav-item me-4">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item me-4">
          <NavLink className="nav-link" to="/signup">
            Sign Up
          </NavLink>
        </li>
      </ul>
    );
  }

  return (
    <nav className="Navigation navbar navbar-expand-md">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          ShareBnB
        </Link>
        {true ? loggedInNav() : loggedOutNav()}
      </div>
    </nav>
  );
}

export default NavBar;
