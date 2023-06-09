import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ListingCard({ listing }) {
  const { image_url, title } = listing;
  return (
    <div style={{ margin: "10px" }}>
      <Card style={{ width: "40rem" }} className="m-auto">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div>
            <Card.Img variant="top" src={image_url} alt={title}></Card.Img>
          </div>
          <Button className="mt-3" variant="primary">
            Check out details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ListingCard;
