import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar
      className="bg-pink"
    >
      
      <Container className="justify-content-start">
        <Link
          to="/"
          className="text-white ms-3 text-decoration-none"
          >
          🏠 Home 
        </Link>
        <Link
          to="/contacto"
          className="text-white ms-3 text-decoration-none"
          >
          📒 Contacto
        </Link>
      </Container>
      <Navbar.Brand className="ms-auto text-white">Happy Cake 🍰</Navbar.Brand>
    </Navbar>
  );
};
export default Navigation;
