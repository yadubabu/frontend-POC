import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
import { useSelector } from "react-redux";
interface Auth {
  auth: boolean;
}

const NavBar = () => {
  const auth = useSelector<Auth>((state) => state.auth);
  console.log(auth);

  return (
    <Navbar bg="dark" expand="lg" variant="light">
      <Container fluid>
        <Navbar.Brand className="p-2 h1" href="/">
          <span className="text-danger ">MV</span>BudgetPlanner
        </Navbar.Brand>
        <span className="h5 text-light">
          Hello!!<span className="text-success"></span>
        </span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto justify-content-center align-items-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
