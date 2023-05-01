import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";

export default function AppDisplay() {
  // create a black background
  const app_display_style = {
    backgroundColor: "black",
    height: "100vh",
    width: "100vw",
    padding: "10px",
  };
  return (
    <Container style={app_display_style}>
      <Row>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Form>
      </Row>
    </Container>
  );
}
