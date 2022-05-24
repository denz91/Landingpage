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
function App() {
  return (
    <Router>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Landing Page</Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Beranda</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/tentang">
              <Nav.Link>Tentang</Nav.Link>
            </LinkContainer>
            <LinkContainer to="kontak">
              <Nav.Link>Kontak</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      <Container style={{ height: "100vh" }}>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/kontak" element={<div>halaman kontak</div>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
