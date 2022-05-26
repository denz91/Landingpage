import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Navbar,
  Nav,
} from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LinkContainer from "react-router-bootstrap/LinkContainer";
import Beranda from "./pages/Beranda";
import Tentang from "./pages/Tentang";
import Kontak from "./pages/Kontak";
function App() {
  return (
    <Router>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Landing Page</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav
              className="ml-auto justify-content-between"
              style={{ width: "15vw" }}
            >
              <LinkContainer to="/">
                <Nav.Link>Beranda</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/tentang">
                <Nav.Link>Tentang</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/kontak">
                <Nav.Link>Kontak</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="min-vh-100 pb-5">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
