import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function BookingCard({ booking }) {

	return (
		<Card>
			<Card.Body>
				<h2>guest: {booking.username}</h2>
				<div>
					check in date: {booking.check_in_date}
				</div>
				<div>
                    check out date: {booking.check_out_date}
				</div>
				<div>
					price_per_night: ${booking.booking_price_per_night}
				</div>
			</Card.Body>
		</Card>
	);
}

export default BookingCard;
