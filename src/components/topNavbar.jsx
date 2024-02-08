import Container from "react-bootstrap/Container";
import Navbar    from "react-bootstrap/Navbar";

const TopNavbar = ({ userName }) => {
  return (
    <Navbar className="bg-body-tertiary mb-5">
      <Container>
        <Navbar.Brand className="fw-bold text-success">
          Transaction Manager
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Hi, {userName}</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
