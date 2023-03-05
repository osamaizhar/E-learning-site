import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Container from 'react-bootstrap/Container';
import NAV from "./components/nav";
import ControlledCarousel from "./components/carousel";
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <NAV />
      <ControlledCarousel />
    </div>
  )
}

export default App;
