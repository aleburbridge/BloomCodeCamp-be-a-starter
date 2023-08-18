import React from 'react';
import { Container, Row, Col, Card, Button, Navbar } from 'react-bootstrap';

// rest of the code remains the same


const HomePage = () => {
  return (
    <div className="bg-dark text-white" style={{ minHeight: '100vh' }}>
      <Container className="pt-5">
        <Row className="justify-content-center mb-5">
          <h1>Welcome to the Assignment Review App</h1>
        </Row>
        <Row className="mb-5">
          {['Card 1', 'Card 2', 'Card 3'].map((text, index) => (
            <Col key={index} sm={4}>
              <Card className="text-dark bg-light">
                <Card.Body>
                  <Card.Title>{text}</Card.Title>
                  <Card.Text>Default text in the card</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="justify-content-center mb-5">
          <Button variant="primary">Login</Button>
        </Row>
      </Container>
      <Navbar bg="dark" className="justify-content-around footer">
        <Navbar.Text>Item 1</Navbar.Text>
        <Navbar.Text>Item 2</Navbar.Text>
        <Navbar.Text>Item 3</Navbar.Text>
        <Navbar.Text>Item 4</Navbar.Text>
      </Navbar>
    </div>
  );
};

export default HomePage;
