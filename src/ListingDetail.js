import React, { useContext, useEffect, useState } from "react";
import ShareBnBApi from "./api";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MessageForm from "./MessageForm";
import userContext from "./userContext";
import BookingForm from "./BookingForm";
import MessageList from "./MessageList";
import BookingList from "./BookingList";
import Alert from "./Alert";

function ListingDetail({ handleMessage, handleBooking }) {
  const { id } = useParams();

  const user = useContext(userContext);

  const [listing, setListing] = useState(null);
  const [errors, setError] = useState([]);

  useEffect(function loadCompaniesFromAPI() {
    async function fetchListing() {
      try {
        const response = await ShareBnBApi.getListing(id);
        setListing(response);
      } catch (err) {
        setError(err);
      }
    }
    fetchListing();
  }, [id]);

  if (errors.length) return <Alert type="danger" messages={errors} />
  if (!listing) return <i>Loading...</i>;

  return (
    <div className="d-flex">
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
              handleBooking={handleBooking} />
          </div>
        }
      </Card>
      {user.username === listing.username && listing.messages &&
        <Card style={{ width: "40rem" }} className="m-auto">
          <MessageList messages={listing.messages} type="asked" />
        </Card>
      }

      {user.username === listing.username && listing.bookings &&
        <Card style={{ width: "40rem" }} className="m-auto">
          <BookingList bookings={listing.bookings}/>
        </Card>
      }
    </div>
  );
}

export default ListingDetail;
