import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
  Dropdown,
  DropdownButton,
  Container,
  Carousel,
} from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="#home">Korir-Online Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
          <DropdownButton
            id="dropdown-basic-button"
            title="LOGIN"
            variant="light"
          >
            <Dropdown.Item href="#/action-1">SignUp</Dropdown.Item>{" "}
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-2">Orders</Dropdown.Item>{" "}
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-3">Rewards</Dropdown.Item>{" "}
            <Dropdown.Divider />
          </DropdownButton>
          <Nav className="mr-auto">
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Nortification Preference
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Sell on Korir-Online Store
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                24/7 Customer care
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Advertise </NavDropdown.Item>
              <NavDropdown.Item href="">Download App</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">Elctronics</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Fashion</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Sports</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Furniture</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
export default Header;
