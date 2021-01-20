import React from "react";
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
    >
      Save
    </Button>
  );
  const deleteButton = (
    <Button onClick={() => handleDelete(booksId)}>Delete</Button>
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
        <div className="d-flex flex-row align-items-start mb-3">
          <div>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{authors}</Card.Text>
          </div>
          <div className="ml-auto">
            <Card.Link href={link} className="mr-3">
              View
            </Card.Link>
            {saved ? deleteButton : saveButton}
          </div>
        </div>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
