import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RoutesList from "./RoutesList";
import userContext from "./userContext";
import ShareBnBApi from "./api";
import NavBar from "./NavBar";
import jwt_decode from "jwt-decode";

const LOCAL_STORAGE_TOKEN_KEY = "token";

function App() {
  const [listings, setListings] = useState({ listing: null, isLoaded: false });

  const [currUser, setCurrUser] = useState({ user: null, isLoaded: false });
  const [token, setToken] = useState(
    localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
  );

  useEffect(function getListingsOnMount() {
    async function getListings() {
      const listings = await ShareBnBApi.getListings();
      setListings({ listing: listings, isLoaded: true });
    }
    getListings();
  }, []);

  async function addListing(formData) {
    const listing = await ShareBnBApi.postListing(formData);
    setListings((listings) => ({
      listing: [...listings.listing, listing],
      isLoaded: true,
    }));
  }

  useEffect(
    function changeUser() {
      getUser();
    },
    [token]
  );

  async function getUser() {
    if (token) {
      ShareBnBApi.token = token;
      const { sub } = jwt_decode(token);
      const user = await ShareBnBApi.getCurrentUser(sub.username);
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
      setCurrUser({ user: user, isLoaded: true });
    } else {
      setCurrUser({ user: null, isLoaded: true });
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    }
  }

  async function handleLogIn(formData) {
    const token = await ShareBnBApi.login(formData);
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
    setToken(token);
  }

  async function signup(signupData) {
    let token = await ShareBnBApi.signup(signupData);
    setToken(token);
  }

  function handleLogout() {
    setCurrUser({ user: null, isLoaded: true });
    setToken("");
  }

  async function search(name) {
    console.log("🚀 > search > name=", name);
    let listings = await ShareBnBApi.getListings(name);
    console.log("🚀 > search > listings=", listings);
    setListings({
      listing: listings,
      isLoaded: true,
    });
  }

  if (!listings.isLoaded) return <i>Loading...</i>;

  return (
    <div className="App">
      <userContext.Provider value={currUser.user}>
        <BrowserRouter>
          <NavBar handleLogout={handleLogout} />
          <RoutesList
            listings={listings.listing}
            addListing={addListing}
            handleLogIn={handleLogIn}
            handleSignUp={signup}
            handleSearch={search}
          />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
