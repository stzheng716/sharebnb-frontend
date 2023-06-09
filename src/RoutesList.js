import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home.js";
import ListingDetail from "./ListingDetail.js";
import ListingForm from "./ListingForm";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";

/** RouteList component.
 *
 * RoutesList -> {Home, CompanyList, JobList, CompanyDetail}
 *
 * Component to hold the routes
 */

function RoutesList({
  handleLogIn,
  handleSignUp,
  handleUpdate,
  addListing,
  error,
  listings,
}) {
  // const user = useContext(userContext);
  const user = { user: "username" };

  if (user.user) {
    return (
      <Routes>
        <Route path="/" element={<Home listings={listings} />} />
        <Route path="/listings/create" element={<ListingForm addListing={addListing}/>} />
        <Route path="/listings/:id" element={<ListingDetail />} />
        {/* <Route
          path="/users/username"
          element={<ProfileForm handleUpdate={handleUpdate} error={error} />}
        /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<LogInForm handleLogIn={handleLogIn} error={error} />}
        />
        <Route
          path="/signup"
          element={<SignUpForm handleSignUp={handleSignUp} error={error} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }
}

export default RoutesList;
