import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Signup() {
  return (
    <Container fluid>

      <Card className='text-black m-5' style={{ borderRadius: '25px' }}>
        <Card.Body>
          <Row>
            <Col md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <i className="fas fa-user me-3" style={{ fontSize: '1.5rem' }}></i>
                <Form.Control placeholder='Your Name' />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-envelope me-3" style={{ fontSize: '1.5rem' }}></i>
                <Form.Control placeholder='Your Email' type='email' />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-phone me-3" style={{ fontSize: '1.5rem' }}></i>
                <Form.Control placeholder='Your Phone Number' type='tel' />
              </div>


              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-lock me-3" style={{ fontSize: '1.5rem' }}></i>
                <Form.Control placeholder='Password' type='password' />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-key me-3" style={{ fontSize: '1.5rem', }}></i>
                <Form.Control placeholder='Repeat your password' type='password' />
              </div>


              <Button className='mb-4' size='lg' style={{ backgroundColor: '#03a49c', border: ' none' }}>
                Register
              </Button>


            </Col>

            <Col md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <Card.Img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
            </Col>

          </Row>
        </Card.Body>
      </Card>

    </Container>
  );
}

export default Signup;
