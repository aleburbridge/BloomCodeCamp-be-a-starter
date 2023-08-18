import React from 'react';
import { Container, Row, Col, Card, Button, Navbar } from 'react-bootstrap';


function HomePage() {
  return (
    <div className="bg-dark text-white" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ backgroundColor: '#303030' }}>
        <Container className="pt-5">
          <Row className="justify-content-center mb-5">
            <h1 style={{ textAlign: 'center' }}>Welcome to the Assignment Review App</h1>
          </Row>
        </Container>
      </div>
      <Container className="flex-grow-1" style={{ paddingTop: '30px' }}>
        <Row className="mb-5">
          {['Card 1', 'Card 2', 'Card 3'].map((text, index) => (
            <Col key={index} sm={4}>
              <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card className="text-dark bg-light" style={{ cursor: 'pointer', transition: '0.3s' }} onMouseOver={e => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)'} onMouseOut={e => e.currentTarget.style.boxShadow = ''}>
                  <Card.Body>
                    <Card.Title>{text}</Card.Title>
                    <Card.Text>Default text in the card</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
        <Row className="justify-content-center mb-3">
          <Button variant="primary" style={{ fontSize: '20px', width: 'auto', whiteSpace: 'nowrap' }}>Login</Button>
        </Row>
        <Row className="justify-content-center mb-5">
          <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</p>
        </Row>
      </Container>
      <Navbar style={{ backgroundColor: '#303030' }} className="justify-content-around footer">
        <Navbar.Text style={{ textDecoration: 'underline' }}>Item 1</Navbar.Text>
        <Navbar.Text style={{ textDecoration: 'underline' }}>Item 2</Navbar.Text>
        <Navbar.Text style={{ textDecoration: 'underline' }}>Item 3</Navbar.Text>
        <Navbar.Text style={{ textDecoration: 'underline' }}>Item 4</Navbar.Text>
      </Navbar>
    </div>
  );
}

export default HomePage;
