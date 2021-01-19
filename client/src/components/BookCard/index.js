import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function BookCard({
  book: { title, authors, description, image, link, saved },
  ...props
}) {
  const saveButton = <Button>Save</Button>;
  const deleteButton = <Button>Delete</Button>;

  return (
    <Card className="flex-row mb-3" {...props}>
      <Card.Img src={image} style={{ maxHeight: "200px", width: "auto" }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{authors}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <Card.Link href={link}>View</Card.Link>
        {saved ? saveButton : deleteButton}
      </Card.Body>
    </Card>
  );
}

export default BookCard;
