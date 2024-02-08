import { Row, Col, Stack, Container } from "react-bootstrap";
import LoginForm                      from "../../components/loginForm";
import { Link }                       from "react-router-dom";

const LoginPage = () => {
  return (
    <Container>
      <Row className="d-flex align-items-center justify-content-center vh-100">
        <Col lg={5}>
          <Stack>
            <h1 className="title text-green">Welcome to Transaction Manager</h1>
            <p className="text-lg mt-4">
              Track your daily income &amp; expenses on the go
            </p>
          </Stack>
        </Col>

        <Col lg={3}></Col>

        <Col lg={4}>
          <Stack>
            <h1 className="mb-5">Log In to your account</h1>
            <LoginForm />
            <p className="text-center py-5">
              Don&apos;t have account?{" "}
              <Link to="/signup">Create new account</Link>
            </p>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
