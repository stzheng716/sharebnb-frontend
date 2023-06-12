import React, { useContext, useState } from "react";
import userContext from "./userContext";
import { Button, Card } from "react-bootstrap";

function BookingForm({ listing, handleBooking }) {
  const user = useContext(userContext);

  const [formData, setFormData] = useState({
    check_in_date: "",
    check_out_date: ""
  });

  function handleChange(evt) {
    const input = evt.target;
    setFormData((formData) => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    formData.username = user.username
    formData.property_id = listing.id
    formData.booking_price_per_night = listing.price_per_night
    console.log(formData)
    await handleBooking(formData);
    setFormData((formData) => ({ ...formData }));
  }

  return (
    <div className="d-flex align-items-center justify-content-center m-4">
      <Card style={{ width: '500px', padding: '20px', textAlign: "left" }}>
        <h2>Booking Card</h2>
        <form className="LogInForm" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="check_in">check_in_date</label>
            <input
              type="date"  
              id="check_in"
              name="check_in_date"
              className="form-control"
              onChange={handleChange}
              value={formData.check_in_date}
            />
          </div>

          <div>
            <label htmlFor="check_in">check_out_date</label>
            <input
              type="date"  
              id="check_out"
              name="check_out_date"
              className="form-control"
              onChange={handleChange}
              value={formData.check_out_date}
            />
          </div>

          <Button variant="success" type="submit">
            Book this house
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default BookingForm;