import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/styles/App.css"; // Import custom CSS file for additional styling

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            className="navbar-brand"
          ></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="nav-link">
                Home
              </Nav.Link>

              <NavDropdown
                title="Recipies"
                id="basic-nav-dropdown"
                className="nav-dropdown"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/cake"
                  className="dropdown-item"
                >
                  Cake
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/cookies"
                  className="dropdown-item"
                >
                  Cookies
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/bread"
                  className="dropdown-item"
                >
                  Bread
                </NavDropdown.Item>

                {/* Add more dropdown items if needed */}
              </NavDropdown>
              <Nav.Link as={Link} to="/about" className="nav-link">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
