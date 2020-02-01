import React from 'react';

import { Button, Card, Navbar, Form, Nav, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navig() {
    return (
      <Navbar bg="secondary" variant="dark">
        <Navbar.Brand ><Link to="/">Home</Link></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link ><Link to={"/about"}>About us</Link></Nav.Link>
          <Nav.Link> < Link to="/footer" >Footer</Link></Nav.Link>
          <Nav.Link ><Link to="/card-component">Pricing</Link></Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    )
  }
  export default Navig;