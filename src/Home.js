import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ListingCard from "./ListingCard";
import ShareBnBApi from "./api";
import SearchForm from "./SearchForm";
import "./Home.css";
import ListingList from "./ListingList";
/** Home component.
 *
 * RouteList -> Home
 *
 * Renders home page with background
 */

function Home({ listings }) {
  //   const user = useContext(userContext);
  //   const navigate = useNavigate();

  //   function redirectToLogIn() {
  //     navigate("/login");
  //   }
  //   function redirectToSignUp() {
  //     navigate("/signup");
  //   }

  return (
    <div className="background">
      <div>
        <h1 className="displayText">"Discover Your Perfect Escape"</h1>
        <ListingList listings={listings}/>
      </div>
    </div>
  );
}

export default Home;
