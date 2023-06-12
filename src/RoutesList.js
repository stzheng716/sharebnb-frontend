import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home.js";
import ListingDetail from "./ListingDetail.js";
import ListingForm from "./ListingForm";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";
import userContext from "./userContext";
import ProfileForm from "./ProfileForm.js";
import MapBox from "./MapBox.js";

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
  handleSearch,
  handleMessage,
  handleBooking
}) {
  const user = useContext(userContext);

  if (user) {
    return (
      <Routes>
        <Route
          path="/"
          element={<Home listings={listings} handleSearch={handleSearch} />}
        />
        <Route
          path="/map"
          element={<MapBox listings={listings} />}
        />
        <Route
          path="/listings/create"
          element={<ListingForm addListing={addListing} />}
        />
        <Route path="/listings/:id" element={
          <ListingDetail
            handleMessage={handleMessage}
            handleBooking={handleBooking}
          />}
        />
        <Route
          path="/users/:username"
          element={<ProfileForm handleUpdate={handleUpdate} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route
          path="/"
          element={<Home listings={listings} handleSearch={handleSearch} />}
        />
        <Route
          path="/map"
          element={<MapBox listings={listings} />}
        />
        <Route
          path="/login"
          element={<LogInForm handleLogIn={handleLogIn} />}
        />
        <Route
          path="/signup"
          element={<SignUpForm handleSignUp={handleSignUp} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }
}

export default RoutesList;
