import React, { useEffect, useState } from "react";
import { Button, Form, Row } from "react-bootstrap";

/** Search widget.
 *
 * Appears on CompanyList and JobList so that these can be filtered
 * down.
 *
 * This component doesn't *do* the searching, but it renders the search
 * form and calls the `searchFor` function prop that runs in a parent to do the
 * searching.
 *
 * { CompanyList, JobList } -> SearchForm
 */

function SearchForm({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  /** Tell parent to filter */
  function handleSubmit(evt) {
    // take care of accidentally trying to search for just spaces
    evt.preventDefault();
    handleSearch(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  /** Update form fields */
  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="justify-content-center justify-content-lg-start gx-0">
        <div className="d-flex align-items-center col-10 justify-content-center ">
          <input
            className="form-control form-control-lg me-2"
            name="q"
            placeholder="Enter search term.."
            value={searchTerm}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-lg btn-primary">
            Submit
          </button>
        </div>
      </Form.Group>
    </Form>
  );
}

export default SearchForm;
