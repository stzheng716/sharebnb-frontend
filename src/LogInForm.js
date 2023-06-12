import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Notice from "./Notice";
import { Card } from "react-bootstrap";

function LogInForm({ handleLogIn }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState(null);

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData((formData) => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  /** Call parent function and clear form. */
  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      await handleLogIn(formData);
    } catch (error) {
      console.log(error)
      setError(error)
      return;
    }

    navigate("/");
  }

  return (
    <div className="d-flex align-items-center justify-content-center m-4">
      <Card style={{ width: '400px', padding: '20px', textAlign: "left" }}>
        <h2>Log In</h2>
        <form className="LogInForm" onSubmit={handleSubmit}>
          {error && error.map((e, i) => <Notice key={i} message={e} type="danger" />)}
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              className="form-control"
              placeholder="username"
              onChange={handleChange}
              value={formData.username}
              aria-label="username"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              className="form-control"
              placeholder="password"
              onChange={handleChange}
              value={formData.password}
              aria-label="password"
            />
          </div>

          <Button variant="primary" type="submit">
            Log In
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default LogInForm;
