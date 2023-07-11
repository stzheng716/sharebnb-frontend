import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RoutesList from "./RoutesList";
import userContext from "./userContext";
import ShareBnBApi from "./api";
import NavBar from "./NavBar";
import jwt_decode from "jwt-decode";

const LOCAL_STORAGE_TOKEN_KEY = "shareBnB-token";

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
  }, [ ]);

  useEffect(
    function changeUser() {
      getUser();
    },
    [token]
  );

  async function addListing(formData) {
    const listing = await ShareBnBApi.postListing(formData);
    setListings((listings) => ({
      listing: [...listings.listing, listing],
      isLoaded: true,
    }));
  }

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

  async function search(name = "") {
    const listings = await ShareBnBApi.getListings(name);
    setListings({
      listing: listings,
      isLoaded: true,
    });
  }

  async function handleUpdateProfile(formData){
    const username = currUser.user.username
    const updatedUser = await ShareBnBApi.updateProfile(formData, username)
    setCurrUser({ user: updatedUser, isLoaded: true });
  }

  async function handleMessage(formData){
    await ShareBnBApi.messageListing(formData)
  }

  async function handleBooking(formData){
    await ShareBnBApi.bookProperty(formData)
  }
  
  if (!listings.isLoaded || !currUser.isLoaded) return <i>Loading...</i>;

  return (
    <div className="App">
      <userContext.Provider value={currUser.user}>
        <BrowserRouter>
          <NavBar handleLogout={handleLogout} handleSearch={search} />
          <RoutesList
            listings={listings.listing}
            addListing={addListing}
            handleLogIn={handleLogIn}
            handleSignUp={signup}
            handleUpdate={handleUpdateProfile}
            handleMessage={handleMessage}
            handleBooking={handleBooking}
          />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
