import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { searchBooks } from "../../utils/API";

function SearchBooks() {
  const [searchResults, setSearchResults] = useState([]);
  const [err, setErr] = useState("");
  const searchInput = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const toSearch = searchInput.current.value.trim();
    if (!toSearch) {
      return setErr("Can't submit an empty book title.");
    }

    searchBooks(toSearch).then(results => {
      setErr("");
      console.log(results);
      setSearchResults(results);
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="search">
        <Form.Label>Search</Form.Label>
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Book title"
            ref={searchInput}
          />
          <InputGroup.Append>
            <Button variant="primary" type="submit">
              Search book title
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
      {err ? <Alert variant="warning">{err}</Alert> : <></>}
    </Form>
  );
}

export default SearchBooks;
