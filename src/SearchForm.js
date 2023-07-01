import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  /** Tell parent to filter */
  function handleSubmit(evt) {
    // take care of accidentally trying to search for just spaces
    evt.preventDefault();
    handleSearch(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
    navigate("/");
  }

  /** Update form fields */
  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  return (
    <Form onSubmit={handleSubmit} className="mt-2 d-flex">
      <Form.Control
        className="justify-content-center gx-0 m-1"
        name="q"
        placeholder="Enter search term.."
        type="search"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-lg btn-primary">
        <i className='bx bx-search'></i>
      </button>
    </Form>
  );
}

export default SearchForm;
