import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function MessageCard({ message, type }) {

	return (
		<Card>
			<Card.Body>
				<h2>Message {type}</h2>
				<div>
					Message: {message.body}
				</div>
				<div>
					Sent_at: {message.sent_at_date}
				</div>
				<div>
					Message ID: {message.id}
				</div>
			</Card.Body>
		</Card>
	);
}

export default MessageCard;
