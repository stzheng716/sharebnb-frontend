import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ListingCard from "./ListingCard";
import ShareBnBApi from "./api";
import SearchForm from "./SearchForm";
/** Home component.
 *
 * RouteList -> Home
 *
 * Renders home page with background
 */

function Home({ listings, handleSearch }) {
  console.log("HOMELISTING", listings);
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
        <h1 className="displayText">ShareBnB!</h1>
      </div>
      <SearchForm handleSearch={handleSearch} />
      {listings && listings.map((l) => <ListingCard key={l.id} listing={l} />)}
    </div>
  );
}

export default Home;
