import React from "react";
function ListingCard({ listing }) {
  const {
    city,
    country,
    details,
    id,
    image_url,
    price_per_night,
    state,
    street,
    title,
    username,
    zip,
  } = listing;
  return (
    <div>
      <ul>
        <li>{title}</li>
      </ul>
      <img src={image_url} alt={title}></img>
    </div>
  );
}

export default ListingCard;
