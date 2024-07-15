import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../assets/styles/App.css"; // Import custom CSS for HomePage styling
import BlogCard from "../components/blogcard";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h1 className="hero-title">Welcome to My Baking Blog!</h1>
              <p className="hero-subtitle">
                Discover delicious recipes, baking tips, and more.
              </p>
              <Button
                variant="primary"
                href="#featured-recipes"
                className="hero-button"
              >
                Explore Recipes
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Recipes Section */}
      <section id="featured-recipes" className="featured-recipes">
        <Container>
          <h2 className="section-title">Featured Recipes</h2>
          <Row>
            <Col md={4}>
              {" "}
              <BlogCard
                imageSrc="https://via.placeholder.com/400x250"
                title="Chocolate Cake"
                summary="A rich and moist chocolate cake that's perfect for any occasion."
                link="/cake-recipe"
              />
            </Col>
            <Col md={4}>
              {" "}
              <BlogCard
                imageSrc="https://via.placeholder.com/400x250"
                title="Chocolate Cake"
                summary="A rich and moist chocolate cake that's perfect for any occasion."
                link="/cake-recipe"
              />
            </Col>
            <Col md={4}>
              {" "}
              <BlogCard
                imageSrc="https://via.placeholder.com/400x250"
                title="Chocolate Cake"
                summary="A rich and moist chocolate cake that's perfect for any occasion."
                link="/cake-recipe"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Blog Posts Section */}
      <section className="blog-posts">
        <Container>
          <h2 className="section-title">Latest Blog Posts</h2>
          <Row>
            <Col md={4}>
              <BlogCard
                imageSrc="https://via.placeholder.com/400x250"
                title="Chocolate Cake"
                summary="A rich and moist chocolate cake that's perfect for any occasion."
                link="/cake-recipe"
              />
            </Col>
            <Col md={4}>
              {" "}
              <BlogCard
                imageSrc="https://via.placeholder.com/400x250"
                title="Chocolate Cake"
                summary="A rich and moist chocolate cake that's perfect for any occasion."
                link="/cake-recipe"
              />
            </Col>
            <Col md={4}>
              {" "}
              <BlogCard
                imageSrc="https://via.placeholder.com/400x250"
                title="Chocolate Cake"
                summary="A rich and moist chocolate cake that's perfect for any occasion."
                link="/cake-recipe"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Container>
          <Row>
            <Col md={6}>
              <p className="footer-text">
                © 2024 My Baking Blog. All rights reserved.
              </p>
            </Col>
            <Col md={6} className="text-end">
              <a href="/privacy-policy" className="footer-link">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="footer-link">
                Terms of Service
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default HomePage;
