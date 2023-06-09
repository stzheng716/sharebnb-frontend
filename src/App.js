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
      console.log("ASDFASFDA");
    }
    getListings();
  }, []);

  async function addListing(formData) {
    const form = new FormData();
    form.append("title", formData.title);
    form.append("details", formData.details);
    form.append("street", formData.street);
    form.append("city", formData.city);
    form.append("state", formData.state);
    form.append("zip", formData.zip);
    form.append("country", formData.country);
    form.append("price_per_night", formData.price_per_night);
    form.append("image", formData.image);
    form.append("username", formData.username);

    const options = {
      method: "POST",
      url: "http://localhost:5001/listings",
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=---011000010111000001101001",
      },
      data: form,
    };

    const res = await axios.request(options);
    console.log("🚀 > addListing > res=", res);

    // setListings(curr => {})
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
