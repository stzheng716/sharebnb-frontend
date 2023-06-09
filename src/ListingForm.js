import React, { useState } from "react";
function ListingForm({ addListing }) {
  const [formData, setFormData] = useState({});

  function handleChange(evt) {
    const input = evt.target;
    if (input.type === 'file') {
      setFormData((formData) => ({
        ...formData,
        [input.name]: input.files[0],
      }));
    } else {
      setFormData((formData) => ({
        ...formData,
        [input.name]: input.value,
      }));
    }
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const newListing = await addListing(formData);
  }

  return (
    <div className="ProfileForm col-md-6 col-lg-4 offset-md-3 offset-lg-4">
      <h3>Create A Listing</h3>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                name="title"
                className="form-control"
                value={formData.title}
                onChange={handleChange}
                maxlength="40"
                placeholder="title"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Details</label>
              <input
                name="details"
                className="form-control"
                value={formData.Details}
                onChange={handleChange}
                placeholder="details"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Street</label>
              <input
                name="street"
                className="form-control"
                value={formData.street}
                onChange={handleChange}
                placeholder="street"
                maxlength="50"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">City</label>
              <input
                name="city"
                className="form-control"
                value={formData.city}
                onChange={handleChange}
                placeholder="city"
                maxlength="30"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">State</label>
              <input
                name="state"
                className="form-control"
                value={formData.state}
                onChange={handleChange}
                placeholder="CA"
                maxlength="2"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Zip</label>
              <input
                name="zip"
                className="form-control"
                value={formData.zip}
                onChange={handleChange}
                placeholder="91384"
                maxlength="5"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Country</label>
              <input
                name="country"
                className="form-control"
                value={formData.country}
                onChange={handleChange}
                placeholder="USA"
                maxlength="3"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Price Per Night</label>
              <input
                name="price_per_night"
                className="form-control"
                value={formData.price_per_night}
                onChange={handleChange}
                placeholder="99"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                name="username"
                className="form-control"
                value={formData.username}
                onChange={handleChange}
                placeholder="hostuser"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Image</label>
              <input
                type="file"
                name="image"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="d-grid">
              <button className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ListingForm;
