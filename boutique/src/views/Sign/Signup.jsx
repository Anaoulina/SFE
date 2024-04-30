import React , { useState } from 'react';
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
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  function handelSignupClick() {
    navigate('/login');
  }
  const [formatData, setFormaData] = useState({
    username: "",
    password: "",
    email: ""
   // number : ""
  })
  const changeHandler = (e) => {
    setFormaData ({...formatData,[e.target.name]:e.target.value})
  }

  const login = async () => {
    console.log('hello',formatData);
    let responseData ;
    await fetch ('http://localhost:4000/signup',{
      method : 'POST' ,
      headers : {
       Accept : 'application/form-data' , 
      'Content-Type' : 'application/json' ,},
      body : JSON.stringify(formatData),
    }).then((response)=>response.json()).then((data)=>responseData=data);
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else {
      alert (responseData.errors)
    }
  } 
  return (
    <Container fluid>

      <Card className='text-black m-5' style={{ borderRadius: '25px' }}>
        <Card.Body>
          <Row>
            <Col md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
              <Form>
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <i className="fas fa-user me-3" style={{ fontSize: '1.5rem' }}></i>
                  <Form.Control name='username' value={formatData.username} onChange={changeHandler} placeholder='Your Name' />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-envelope me-3" style={{ fontSize: '1.5rem' }}></i>
                  <Form.Control name='email' value={formatData.email} onChange={changeHandler} placeholder='Your Email' type='email' />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-phone me-3" style={{ fontSize: '1.5rem' }}></i>
                  <Form.Control placeholder='Your Phone Number' type='tel' />
                </div>


                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-lock me-3" style={{ fontSize: '1.5rem' }}></i>
                  <Form.Control name='password' value={formatData.password} onChange={changeHandler} placeholder='Password' type='password' />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-key me-3" style={{ fontSize: '1.5rem', }}></i>
                  <Form.Control placeholder='Repeat your password' type='password' />
                </div>


                <Button onClick={login} className='mb-4' size='lg' style={{ backgroundColor: '#03a49c', border: ' none', width: '100%' }}>
                  Register
                </Button>
              </Form>

              <p className="mb-0">You already have an account? <a href="#" onClick={handelSignupClick}>Login</a></p>
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
