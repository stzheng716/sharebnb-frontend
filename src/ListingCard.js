import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

//add function if use is not logged in to be redirected to sign up page with a alert message.
function ListingCard({ listing }) {
  const { image_url, title, city, state, price_per_night, id } = listing;

  return (
    <div style={{ margin: "10px" }} className="m-4">
        <Card style={{ height: 'auto', maxWidth: '400px' }}>
          <Card.Img
            variant="top"
            src={image_url} alt={title}
          // style={{ width: "200", height: "200" }}
          // width={200} 
          // height={200}
          ></Card.Img>
          <Card.Body>
            <Card.Title >{title}</Card.Title>
            <Card.Text>
              {city}, {state}
            </Card.Text>
            <Card.Text>${price_per_night}/day</Card.Text>
            <Link to={`/listings/${id}`} className="listings-link">
              <Button variant="dark">More Info</Button>
            </Link>
          </Card.Body>
        </Card>
    </div>
  );
}

export default ListingCard;
