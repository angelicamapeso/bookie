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
      <Row>
        <Col className="d-md-flex flex-row align-items-end">
          <h1 className="mb-0 mr-4">Search for</h1>
          <Form onSubmit={handleSubmit} className="flex-grow-1">
            <Form.Group controlId="search" className="mb-0">
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
          </Form>
        </Col>
      </Row>
      {err ? (
        <Row className="py-3">
          <Col>
            <Alert variant="danger">{err}</Alert>
          </Col>
        </Row>
      ) : (
        <></>
      )}
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
