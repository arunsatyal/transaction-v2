import { Row, Col, Stack, Container } from "react-bootstrap";
import SignupForm                     from "../../components/signupForm";
import { Link }                       from "react-router-dom";

const SignupPage = () => {
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
            <h1 className="mb-5">Create new account</h1>

            <SignupForm />

            <p className="text-center py-5">
              Already have account? <Link to="/">Login</Link>
            </p>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
