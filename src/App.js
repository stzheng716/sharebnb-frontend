import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RoutesList from "./RoutesList";
import ShareBnBApi from "./api";
import NavBar from "./NavBar";
import axios from "axios";

const API_URL = "http://localhost:5001";

function App() {
  const [listings, setListings] = useState({ listing: null, isLoaded: false });

  // const [currUser, setCurrUser] = useState({ user: null, isLoaded: false });
  // const [token, setToken] = useState(
  //   localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
  // );

  useEffect(function getListingsOnMount() {
    async function getListings() {
      const listings = await ShareBnBApi.getListings();
      setListings({ listing: listings, isLoaded: true });
    }
    getListings();
  }, []);


  async function addListing(formData) {
    const listing = await ShareBnBApi.postListing(formData);
    setListings(listings => ({
      listing: [...listings.listing, listing],
      isLoaded: true,
    }));
  }


  // async function getUser() {  //   if (token) {
  //     ShareBnBApi.token = token;
  //     const { username } = jwt_decode(token);
  //     const user = await ShareBnBApi.getCurrentUser(username);
  //     localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
  //     setCurrUser({ user: user, isLoaded: true });
  //   } else {
  //     setCurrUser({ user: null, isLoaded: true });
  //     localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
  //   }
  // }

  // async function handleLogIn({ username, password }) {
  //   const token = await ShareBnBApi.login(username, password);
  //   // localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
  //   setToken(token);
  // }

  // async function handleSignUp({
  //   username,
  //   firstName,
  //   lastName,
  //   email,
  //   password,
  //   isHost,
  // }) {
  //   const token = await ShareBnBApi.signUp(
  //     username,
  //     password,
  //     firstName,
  //     lastName,
  //     email,
  //     isHost
  //   );

  function handleLogout() {
    // setCurrUser({ user: null, isLoaded: true });
    // setToken("");
  }

  if (!listings.isLoaded) return <i>Loading...</i>;

  return (
    <div className="App">
      {/* <userContext.Provider value={currUser}> */}
      <BrowserRouter>
        <NavBar handleLogout={handleLogout} />
        <RoutesList
          listings={listings.listing}
          addListing={addListing}
        // handleLogIn={handleLogIn}
        // handleSignUp={handleSignUp}
        // handleUpdate={handleUpdate}
        />
      </BrowserRouter>
      {/* </userContext.Provider> */}
    </div>
  );
}

export default App;
