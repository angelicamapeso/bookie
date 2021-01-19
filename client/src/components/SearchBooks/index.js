import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function SearchBooks() {
  return (
    <Form>
      <Form.Group controlId="search">
        <Form.Label>Search</Form.Label>
        <InputGroup>
          <Form.Control type="text" placeholder="Book title" />
          <InputGroup.Append>
            <Button variant="primary" type="submit">
              Search book title
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </Form>
  );
}

export default SearchBooks;
