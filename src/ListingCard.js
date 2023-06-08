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
      <img src={image_url} alt={title}></img>
      <ul>
        <li>{title}</li>
        <li>
          {street} {zip} {city} {state} {country}
        </li>
        <li>{details}</li>
        <li>{price_per_night}</li>
        <li>{username}</li>
      </ul>
    </div>
  );
}

export default ListingCard;
