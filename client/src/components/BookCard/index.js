import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useBooks } from "../../utils/BookContext";

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
    <Card className="flex-row mb-3" {...props}>
      <Card.Img src={image} style={{ maxHeight: "200px", width: "auto" }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{authors}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <Card.Link href={link}>View</Card.Link>
        {saved ? deleteButton : saveButton}
      </Card.Body>
    </Card>
  );
}

export default BookCard;
