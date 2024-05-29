import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

function NavBar() {
  return (
    <Container>
      <Navbar expand="lg" className="border-bottom border-success mb-4 custom-font">
        <Navbar.Brand href="/all-courses">Zen Learn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto custom-nav">
            <Nav.Item>
              <Link to={'/all-courses'} style={{ textDecoration: 'none' }}>
                <Nav.Link className="nav-item-link" href="/all-courses">All</Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={'/fsd-courses'} style={{ textDecoration: 'none' }}>
                <Nav.Link className="nav-item-link" href="/fullstack">Full Stack Development</Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={'/data-science-courses'} style={{ textDecoration: 'none' }}>
                <Nav.Link className="nav-item-link" href="/datascience">Data Science</Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={'/cyber-security-courses'} style={{ textDecoration: 'none' }}>
                <Nav.Link className="nav-item-link" href="/cybersecurity">Cyber Security</Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={'/career-courses'} style={{ textDecoration: 'none' }}>
                <Nav.Link className="nav-item-link" href="/career">Career</Nav.Link>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default NavBar;
