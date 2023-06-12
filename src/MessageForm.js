import React, { useContext, useState } from "react";
import userContext from "./userContext";
import { Button, Card } from "react-bootstrap";

function MessageForm({ listing, handleMessage }) {
  const user = useContext(userContext);

  const [formData, setFormData] = useState({
    listingTitle: listing.title,
    body: ""
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
    formData.from_username = user.username
    formData.property_id = listing.id
    await handleMessage(formData);
    setFormData((formData) => ({ ...formData }));
  }

  return (
    <div className="d-flex align-items-center justify-content-center m-4">
      <Card style={{ width: '500px', padding: '20px', textAlign: "left" }}>
        <h2>Question about listing?</h2>
        <form className="LogInForm" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Listing">Listing Title</label>
            <input
              id="listingTitle"
              name="listingTitle"
              className="form-control"
              value={listing.title}
              disabled
            />
          </div>

          <div>
            <label htmlFor="body">Message:</label>
            <textarea
              id="body"
              name="body"
              className="form-control"
              placeholder="message"
              onChange={handleChange}
              value={formData.message}
              aria-label="message"
            />
          </div>

          <Button variant="primary" type="submit">
            Send message
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default MessageForm;