import React from 'react';
import "./sliderCard.css";
import { Container, Row, Col } from 'react-bootstrap';


const SliderCard = ({title,desc,cover}) =>  {
    return (
        <Container className='box' >
        <Row>
          <Col md={6}>
            <h1>{title}</h1>
            <p>{desc}</p>
          </Col>
          <Col md={6}>
            <img src={cover} alt="#" />
          </Col>
        </Row>

    </Container>
    )
}

export default SliderCard
