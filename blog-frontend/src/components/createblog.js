import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // State to hold the image URL
  const [imageFile, setImageFile] = useState(null); // State to hold the selected file
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Generate a URL for the selected file and update the state
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      setImageFile(file); // Store the file
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create an object to hold the form data
    const blogData = {
      title,
      content,
      // Include the image URL in the payload (note: not the file itself)
      imageUrl,
    };

    // Log the data to debug
    console.log("Form Data:", blogData);

    try {
      // Construct the payload for the request
      const response = await fetch(
        "http://localhost:8000/api/blog/createblog",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Send as JSON
          },
          body: JSON.stringify(blogData), // Send data as JSON
        }
      );

      const result = await response.json();
      if (response.ok) {
        setResponseMessage("Blog created successfully!");
        // Clear form after successful submission
        setTitle("");
        setContent("");
        setImageUrl("");
        setImageFile(null);
      } else {
        setResponseMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <h2>Create Blog</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formImage">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange} // Handle file selection
          />
        </Form.Group>
        <Form.Group controlId="formContent">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            name="content"
            rows={3}
            placeholder="Enter blog content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create"}
        </Button>
      </Form>
      {responseMessage && (
        <div className="mt-3">
          <p>{responseMessage}</p>
          {imageUrl && (
            <div>
              <h5>Image Preview:</h5>
              <img
                src={imageUrl}
                alt="Uploaded"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          )}
        </div>
      )}
    </Container>
  );
};

export default CreateBlog;
