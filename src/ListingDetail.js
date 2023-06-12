import React, { useContext, useEffect, useState } from "react";
import ShareBnBApi from "./api";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MessageForm from "./MessageForm";
import userContext from "./userContext";
import BookingForm from "./BookingForm";

function ListingDetail({ handleMessage, handleBooking }) {
  const { id } = useParams();
  const user = useContext(userContext);

  const [listing, setListing] = useState(null);

  useEffect(function loadCompaniesFromAPI() {
    async function fetchCompany() {
      const response = await ShareBnBApi.getListing(id);
      setListing(response);
    }
    fetchCompany();
  }, []);

  if (!listing) return <i>Loading...</i>;

  return (
    <Card style={{ width: "40rem" }} className="m-auto">
      <Card.Body>
        <Card.Img
          variant="top"
          src={listing.image_url}
          alt={listing.title}
        ></Card.Img>

        <Card.Title>Address</Card.Title>

        <Card.Text>
          {listing.street} {listing.zip} {listing.city} {listing.state}{" "}
          {listing.country}
        </Card.Text>
        <Card.Title>Information</Card.Title>

        <Card.Text>
          <li>{listing.details}</li>
          <li>{listing.price_per_night}</li>
          <li>{listing.username}</li>
        </Card.Text>
      </Card.Body>
      <Button variant="primary" href="/">
        Back to All Listings
      </Button>
      {user.username !== listing.username &&
        <div>
          <MessageForm listing={listing}
            handleMessage={handleMessage} />

          <BookingForm listing={listing}
            handleMessage={handleMessage} />
        </div>
      }
      {user.username === listing.username && listing.messages.map(message =>
        <div>
          <h4>Questions from {message.from_user}</h4>
          <div>
            <p>question: {message.body}</p>
          </div>
        </div>
      )}
    </Card>

  );
}

export default ListingDetail;
