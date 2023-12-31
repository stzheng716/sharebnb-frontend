import React, { useContext, useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import Notice from "./Notice";
import userContext from "./userContext";
import ListingList from "./ListingList";
import MessageList from "./MessageList";
import BookingList from "./BookingList";

function ProfileForm({ handleUpdate }) {

  const user = useContext(userContext);
  console.log(user)

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const { username, first_name, last_name, email } = user;

  const [formData, setFormData] = useState({
    username: username,
    firstName: first_name,
    lastName: last_name,
    email: email,
  });

  const [error, setError] = useState(null);

  function handleChange(evt) {
    const input = evt.target;
    setFormData((formData) => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await handleUpdate(formData);
    } catch (err) {
      console.log(err)
      setError(err);
      return;
    }

    setShowSuccessAlert(true);

    setError([]);
    setFormData((formData) => ({ ...formData }));
  }

  // function showMessage() {
  //   return (
  //     <Card>
  //       <h3>Message Sent</h3>
  //       <div>
  //         {user.sent_message.map(message =>
  //           <Card>
  //             <Card.Body>
  //               Message: {message.body}
  //               Sent_at: {message.sent_at_date}
  //               Message ID: {message.id}
  //             </Card.Body>
  //           </Card>)}
  //       </div>
  //     </Card>
  //   )
  // }

  function showListing() {
    return (
      <Card className="m-2">
        <div>
          <h2>Your listings</h2>
          <ListingList listings={user.listings} />
        </div>
      </Card>
    )
  }


  return (
    //add success message for user
    <div className="d-flex align-items-center justify-content-center m-4 flex-column">
      <div>
        <Card style={{ width: '400px', padding: '20px', textAlign: "left" }} className="m-2">
          <h2>Profile</h2>
          <form className="LogInForm" onSubmit={handleSubmit}>
            {/* {error &&
                        error.map((e, i) => <Notice key={i} message={e} type="danger" />)} */}

            <div className="mb-3">
              <label htmlFor="username">Username:</label>
              <input
                id="username"
                name="username"
                className="form-control"
                value={formData.username}
                aria-label="username"
                disabled
              />
            </div>

            <div className="mb-3">
              <label htmlFor="firstName">First name:</label>
              <input
                id="firstName"
                name="firstName"
                className="form-control"
                placeholder="Jon"
                onChange={handleChange}
                value={formData.firstName}
                aria-label="firstName"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="lastName">Last name:</label>
              <input
                id="lastName"
                name="lastName"
                className="form-control"
                placeholder="Snow"
                onChange={handleChange}
                value={formData.lastName}
                aria-label="lastName"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                name="email"
                className="form-control"
                placeholder="jonsnow123@gmail.com"
                onChange={handleChange}
                value={formData.email}
                aria-label="email"
              />
            </div>
            <Alert show={showSuccessAlert} variant="success">
              Update was successful!
            </Alert>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </form>
        </Card>
      </div>
      <div>
        {user.sent_messages && <MessageList messages={user.sent_messages} type="sent" className="m-2"/>}
      </div>
      <div>
        {user.bookings && <BookingList bookings={user.bookings} className="m-2"/>}
      </div>
      <div>
      {user.listings && showListing()}
      </div>
    </div>
  );
}

export default ProfileForm;