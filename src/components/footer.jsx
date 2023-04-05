import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Footer() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="justify-content-center">
        <Nav>
          <Navbar.Text>© 2023 Made by temirkhan42</Navbar.Text>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;