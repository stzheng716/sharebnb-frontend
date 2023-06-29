import React, { useContext } from "react";
import ListingCard from "./ListingCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

/** Home component.
 *
 * RouteList -> Home
 *
 * Renders home page with background
 */

function ListingList({ listings }) {
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
      <Row xs={1} md={3} lg={4} className="g-4 m-2 p-2">
        {listings &&
          listings.map((l) => (
            <Col key={`c-${l.id}`}>
              <ListingCard key={l.id} listing={l} />
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default ListingList;
