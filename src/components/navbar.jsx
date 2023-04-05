import { useEffect, useState } from 'react';
import useSort from '../utils/hooks';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import SortIcon from './sortIcon';

function NavBar() {
  const sort = useSort();

  const handleSerching = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    sort?.setSearching(e.target?.value);
  };

  const handleSortRatingDesc = (e) => {
    e.preventDefault();
    const list = [...sort.products].sort((p1, p2) => p2?.rating - p1?.rating );
    sort.handleSort(list);
  };

  const handleSortRatingAsc = (e) => {
    e.preventDefault();
    const list = [...sort.products].sort((p1, p2) => p1?.rating - p2?.rating );
    sort.handleSort(list);
  };

  const handleSortPriceDesc = (e) => {
    e.preventDefault();
    const list = [...sort.products].sort((p1, p2) => p2?.price - p1?.price );
    sort.handleSort(list);
  };

  const handleSortPriceAsc = (e) => {
    e.preventDefault();
    const list = [...sort.products].sort((p1, p2) => p1?.price - p2?.price );
    sort.handleSort(list);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Sort by" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleSortRatingDesc} href="#action/3.1">
                <SortIcon title="Rating"/>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleSortRatingAsc} href="#action/3.2">
                <SortIcon title="Rating" sortBy={'desc'}/>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleSortPriceDesc} href="#action/3.1">
                <SortIcon title="Price"/>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleSortPriceAsc} href="#action/3.2">
                <SortIcon title="Price" sortBy={'desc'}/>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleSerching}
              value={sort?.searching}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
