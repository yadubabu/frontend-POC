import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
import { useSelector } from "react-redux";
import { Auth, User } from "../dataTypes";

const NavBar = () => {
  const auth = useSelector<Auth>((state) => state.auth);
  const data = auth
    ? JSON.parse(sessionStorage.getItem("data") || "{}").name
    : "Guest";
  return (
    <Navbar bg="dark" expand="lg" variant="light">
      <Container fluid>
        <Navbar.Brand className="p-2 h1 text-success" href="/">
          <span className="text-danger ">MV</span>BudgetPlanner
        </Navbar.Brand>
        <span className="h5 text-light">
          Hello!!
          <span className="text-success">{data}</span>
        </span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto navbar mx-5">
            <Nav.Link href="/" className="text-warning">
              Home
            </Nav.Link>
            <Nav.Link className="text-warning" href="/login">
              {auth ? "" : "Login"}
            </Nav.Link>
            {auth ? (
              <Nav.Link href="/register" disabled>
                Register
              </Nav.Link>
            ) : (
              <Nav.Link className="text-warning" href="/register">
                Register
              </Nav.Link>
            )}
            <Nav.Link className="text-warning" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="text-warning " href="/logout">
              {auth ? "Logout" : ""}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
