import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";


/** Home component.
 *
 * RouteList -> Home
 *
 * Renders home page with background
 */

function Home() {
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
    </div>
  );
}

export default Home;
