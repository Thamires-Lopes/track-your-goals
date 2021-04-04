import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = ({ headerRoutes = [], dropdownRoutes = [] }) => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand>Goals Tracker</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        {headerRoutes.map((routes) => (
          <Nav.Link href={routes.path}>{routes.name}</Nav.Link>
        ))}
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          {dropdownRoutes.map((item) => (
            <NavDropdown.Item href={item.href}>{item.name}</NavDropdown.Item>
          ))}
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
