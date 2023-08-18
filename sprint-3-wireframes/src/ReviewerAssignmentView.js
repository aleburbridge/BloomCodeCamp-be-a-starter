import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function ReviewerAssignmentView() {
  return (
    <Container className="text-center" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Row className="justify-content-center mb-3">
            <div>
            <h2>Assignment #1</h2>
            <div style={{ 
            backgroundColor: 'gray', 
            borderRadius: '5px', 
            padding: '5px 10px', 
            marginLeft: '10px',
            display: 'inline-block' // Add this line to make the container fit the content width
            }}>
            <h4 style={{ margin: '0' }}>In Review</h4>
            </div>
        </div>
    </Row>
      <Row className="justify-content-center mb-3">
        <Col xs={12} md={6}>
          <Form.Label>GitHub URL</Form.Label>
          <Form.Control type="text" readOnly defaultValue="https://github.com/your-repo" />
        </Col>
      </Row>
      <Row className="justify-content-center mb-3">
        <Col xs={12} md={6}>
          <Form.Label>Branch</Form.Label>
          <Form.Control type="text" readOnly defaultValue="main" />
        </Col>
      </Row>
      <Row className="justify-content-center mb-3">
        <Col xs={12} md={6}>
          <Form.Label>Review Video URL</Form.Label>
          <Form.Control type="text" placeholder="Enter the review video URL" />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="d-flex justify-content-center"> {/* Use d-flex and justify-content-center to align the buttons horizontally */}
          <Button variant="success" className="mx-2">Submit</Button>
          <Button variant="danger" className="mx-2">Reject</Button>
          <Button variant="secondary" className="mx-2">Back</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ReviewerAssignmentView;
