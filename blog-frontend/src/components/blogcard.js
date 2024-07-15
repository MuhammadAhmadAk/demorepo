import React from "react";
import { Card, Button } from "react-bootstrap";
import "../assets/styles/App.css"; // Import custom CSS for BlogCard styling

const BlogCard = ({ imageSrc, title, summary, link }) => {
  return (
    <Card className="blog-card">
      <Card.Img variant="top" src={imageSrc} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{summary}</Card.Text>
        <Button variant="primary" href={link}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
