import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';
import styles from '../style/nav.module.css';
import { Link } from "react-router-dom";
function NAV(){
    return(
        <div className="App">
        <Navbar className={styles.fixedTop} collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Exercise Tracker App</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#features">Home</Nav.Link>
                  <Link to="form">
                    <Nav.Link href="#pricing">Form</Nav.Link>
                  </Link>
        
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">Activities</Nav.Link>
                  
                  {/* <Nav.Link eventKey={2} href="contact">
                    Contact
                  </Nav.Link> */}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        
          </div>
      
    )
}
export default NAV;