import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function LearnerAssignmentView() {
  return (
    <Container className="text-center" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
     <Row className="justify-content-center mb-3">
        <Col xs={12} md={6}>
            <Form.Label><h2>Assignment #1</h2></Form.Label>
            <Form.Control as="select">
            <option>Select Assignment</option>
            <option>Assignment 1</option>
            <option>Assignment 2</option>
            <option>Assignment 3</option>
            <option>Assignment 4</option>
            {/* Add more options as needed */}
            </Form.Control>
        </Col>
        </Row>
      <Row className="justify-content-center mb-3">
        <Col xs={12} md={6}>
          <Form.Label>GitHub URL</Form.Label>
          <Form.Control type="text" placeholder="Enter GitHub URL" />
        </Col>
      </Row>
      <Row className="justify-content-center mb-3">
        <Col xs={12} md={6}>
          <Form.Label>Branch</Form.Label>
          <Form.Control type="text" placeholder="Enter Branch" />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="d-flex justify-content-center"> {/* Use d-flex and justify-content-center to align the buttons horizontally */}
          <Button variant="success" className="mx-2">Submit</Button>
          <Button variant="secondary" className="mx-2">Back to Dashboard</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default LearnerAssignmentView;
