import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";

function Search() {
  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron>
            <h1>Search</h1>
            <p>Search for and save a book to the recommended list!</p>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
