import React, { useState } from 'react';
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

function Login() {
  const navigate = useNavigate();
  function handelSignupClick() {
    navigate('/Signup');
  }
  const [formatData, setFormaData] = useState({
    username: "",
    password: "",
    email: ""
  })

  const changeHandler = (e) => {
    setFormaData ({...formatData,[e.target.name]:e.target.value})
  }
  const login = async () => {
    console.log('hello',formatData);
    let responseData ;
    await fetch ('http://localhost:4000/login',{
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
            <Col md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <Card.Img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
            </Col>
            <Col md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
              <Form >
                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-envelope me-3" style={{ fontSize: '1.5rem' }}></i>
                  <Form.Control name='email' value={formatData.email} onChange={changeHandler} placeholder='Your Email' type='email' required aria-label="Email" />
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-lock me-3" style={{ fontSize: '1.5rem' }}></i>
                  <Form.Control name='password' value={formatData.password} onChange={changeHandler} placeholder='Password' type='password' required aria-label="Password" />
                </div>
                <Button onClick={login} type="submit" className='mb-4' size='lg' style={{ backgroundColor: '#03a49c', border: 'none', width: '100%' }}>
                  Login
                </Button>

              </Form>
              <p className="mb-0">Don't you have an account? <a href="#" onClick={handelSignupClick}>Sign up</a></p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
