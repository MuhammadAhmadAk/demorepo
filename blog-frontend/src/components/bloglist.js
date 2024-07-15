import React from "react";
import { ListGroup, Container, Button } from "react-bootstrap";
import DeleteBlog from "./DeleteBlog"; // Import DeleteBlog if used

const BlogList = () => {
  return (
    <Container>
      <h2>All Blogs</h2>
      <ListGroup>
        <ListGroup.Item>
          <h3>Blog Title 1</h3>
          <p>Blog content 1</p>
          <Button variant="warning" className="me-2">
            Edit
          </Button>
          <DeleteBlog /> {/* For demonstration, usually you'd pass blog ID */}
        </ListGroup.Item>
        <ListGroup.Item>
          <h3>Blog Title 2</h3>
          <p>Blog content 2</p>
          <Button variant="warning" className="me-2">
            Edit
          </Button>
          <DeleteBlog /> {/* For demonstration, usually you'd pass blog ID */}
        </ListGroup.Item>
        {/* Add more blog items here */}
      </ListGroup>
    </Container>
  );
};

export default BlogList;
