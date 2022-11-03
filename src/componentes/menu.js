import { Button,Nav,  Navbar, Container, FormControl, Form, Offcanvas, NavDropdown } from 'react-bootstrap';

 const Menu=() =>{
    return (

        <Navbar bg="light" expand={false}>
        <Container fluid>
        <div >
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
        </div>
        <Navbar.Brand className="navbar-brand-custom"  href="#">Home</Navbar.Brand>
        <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
        >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
               
              </Nav>

            </Offcanvas.Body>
            </Navbar.Offcanvas>

        </Container>
      </Navbar>
    );
}

export default Menu;