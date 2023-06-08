import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RoutesList from './RoutesList';
import ShareBnBApi from './api';
import NavBar from './NavBar';

function App() {
  // const [currUser, setCurrUser] = useState({ user: null, isLoaded: false });
  // const [token, setToken] = useState(
  //   localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
  // );  

  // useEffect(
  //   function changeUser() {
  //     getUser();
  //   },
  //   [token]
  // );

  // async function getUser() {
  //   if (token) {
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

  // if (!currUser.isLoaded) return <i>Loading...</i>;

  return (
    <div className="App">
      {/* <userContext.Provider value={currUser}> */}
        <BrowserRouter>
          <NavBar handleLogout={handleLogout} />
          <RoutesList
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
