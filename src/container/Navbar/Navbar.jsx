import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SocialIcon } from 'react-social-icons';

function NavbarOF() {
  return (
    <>
      <Navbar collapseOnSelect  expand="lg" bg="primary" variant="dark" sticky="top" >
        <Container>
          <SocialIcon className='whatsApp-icon' fgColor="white" label bgColor="green" url="https://api.whatsapp.com/send/?phone=59898863473" target="_blank" />
          <Navbar.Brand href="/"><b className='titulo'>Camelia: Obras Funerarias </b><br /> 098-863-473 / 2219-4540</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="tel:+59898863473">Llamanos</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="https://www.floreriacamelia.com/" >Floreria Camelia</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarOF;