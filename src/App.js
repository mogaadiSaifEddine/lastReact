import {Form, Button, Col, Row, Container} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
  
  <Form>
    <Container fluid >
  <Form.Group  controlId="formHorizontalEmail">
    <Row>
    <Form.Label class="col-2">
      Email
    </Form.Label>
    <Col class="col-10">
      <Form.Control type="email" placeholder="Email" />
    </Col>
    </Row>
  </Form.Group>

  <Form.Group  controlId="formHorizontalPassword">
    <Row>
    <Form.Label class="col-2">
      Password
    </Form.Label>
    <Col class="col-10">
      <Form.Control type="password" placeholder="Password" />
    </Col>
    </Row>
  </Form.Group>
  <fieldset>
    <Form.Group  >
      <Row>
      <Form.Label as="legend" class="col-2">
        Radios
      </Form.Label>
      <Col  class="col-10">
        <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="second radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="third radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
      </Row>
    </Form.Group>
  </fieldset>
  
  <Form.Group controlId="formHorizontalCheck">
  <Row>
  <Form.Label class="col-2">
    </Form.Label>
    <Col class="col-10">
      <Form.Check label="Remember me" />
    </Col>
    </Row>
  </Form.Group>

  <Form.Group >
    <Row>
    <Form.Label class="col-2">
    </Form.Label> 
    <Col class="col-10">
    <Button variant="outline-primary">Sign in</Button>
    </Col>
    </Row>
  </Form.Group>
  </Container>
</Form>
    </div>
  );
}

export default App;
