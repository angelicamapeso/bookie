import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useBooks } from "../../utils/BookContext";
import "./style.css";

function BookCard({
  book: { booksId, title, authors, description, image, link, saved },
  ...props
}) {
  const { handleSave, handleDelete } = useBooks();
  const saveButton = (
    <Button
      onClick={() =>
        handleSave({
          booksId,
          title,
          authors,
          description,
          image,
          link,
        })
      }
      className="save-button"
    >
      Save
    </Button>
  );
  const deleteButton = (
    <Button onClick={() => handleDelete(booksId)} className="delete-button">
      Delete
    </Button>
  );

  return (
    <Card className="flex-row mb-3 border-0" {...props}>
      <div className="card-img-wrap p-3">
        <Card.Img
          className="shadow"
          src={image}
          style={{ maxHeight: "200px", width: "auto" }}
        />
      </div>
      <Card.Body>
        <Row className="justify-content-between mb-3">
          <Col>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{authors}</Card.Text>
          </Col>
          <Col
            xs={4}
            className="d-flex flex-sm-column flex-md-row align-items-end align-items-md-start justify-content-md-end"
          >
            <Card.Link href={link} className="mr-md-3 mr-3 mb-2">
              View
            </Card.Link>
            {saved ? deleteButton : saveButton}
          </Col>
        </Row>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
