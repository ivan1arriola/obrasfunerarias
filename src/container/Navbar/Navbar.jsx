import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarOF() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top" >
        <Container>
          <Navbar.Brand href="/"><b className='titulo'>Camelia Obras Funerarias </b></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

            </Nav>
            <Nav>
              <Nav.Link href="tel:+59898863473">Llámanos</Nav.Link>
              <Nav.Link href="https://www.floreriacamelia.com/" >Floreria Camelia</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarOF;