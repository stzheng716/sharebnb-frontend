import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function LogInForm({ handleLogIn }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

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

    await handleLogIn(formData);

    setFormData({
      username: "",
      password: "",
    });
    navigate("/");
  }

  return (
    <div>
      <h2>Log In</h2>
      <form className="LogInForm" onSubmit={handleSubmit}>
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

        <button variant="primary" type="submit">Log In</button>
      </form>
    </div >
  )
}

export default LogInForm