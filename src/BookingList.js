import React, { useContext } from "react";
import BookingCard from "./BookingCard";


function BookingList({ bookings }) {

  return (
    <div className="background">
      {bookings &&
        bookings.map((b) => (
          <BookingCard key={b.id} booking={b} />
        ))}
    </div>
  );
}

export default BookingList;
