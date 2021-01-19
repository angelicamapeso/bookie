import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BookCard from "../BookCard";
import { searchBooks } from "../../utils/API";
import { useBooks } from "../../utils/BookContext";
import { markSearchSaved } from "../../utils/formatter";

function SearchBooks() {
  const [searchResults, setSearchResults] = useState([]);
  const { savedBooks } = useBooks();
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
      setSearchResults(markSearchSaved(savedBooks, results));
    });
  };

  useEffect(() => {
    setSearchResults(prevState => markSearchSaved(savedBooks, prevState));
  }, [savedBooks]);

  return (
    <>
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
      <Row>
        {searchResults.map(book => (
          <Col xs={12} key={book.booksId}>
            <BookCard book={book} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default SearchBooks;
