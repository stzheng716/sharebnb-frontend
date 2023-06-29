import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import userContext from "./userContext";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import "./Navbar.css";

/** NavBar component.
 *
 * App -> NavBar
 *
 * Renders links to home, companies, and jobs
 */
//TODO: see if we can make NavLink active
function NavBar({ handleLogout }) {
  const user = useContext(userContext);
  console.log("users", user)

  function loggedInNav() {
    return (
      <Navbar bg="light" expand="lg" variant="light">
        <Container className="m-2">
          <Nav.Link className="nav-link m-2" href="/listings/create">
            Create Listing <i className='bx bx-location-plus' ></i>
          </Nav.Link>
          <Nav.Link className="nav-link m-2" href={`/users/${user.username}`}>
            User Profile
          </Nav.Link>
          <Button className="nav-link m-2" href="/" onClick={handleLogout}>
            Log out of {user.username}
          </Button>
        </Container>
      </Navbar>
    );
  }

  function loggedOutNav() {
    return (
      <Navbar bg="light" expand="lg" variant="light">
        <Container>
          <Nav.Link className="nav-link m-2" href="/login">
            Login
          </Nav.Link>
          <Nav.Link className="nav-link m-2" href="/signup">
            Sign Up
          </Nav.Link>
        </Container>
      </Navbar>
    );
  }

  return (
    <Navbar bg="light" expand="lg" variant="light">
      <Container>
        <Navbar.Brand
          href="/"
          className="displayText">
          ShareBnB <i className='bx bx-home' ></i>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav.Link className="nav-link m-2" href="/map">
            Map Listings <i className='bx bx-map' ></i>
          </Nav.Link>
          {user ? loggedInNav() : loggedOutNav()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
