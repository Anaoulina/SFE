import React from "react";
import "./ServiceStyle.css";
import { Col, Container, Row } from "react-bootstrap";
import { serviceData } from "./SliderData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faCreditCard, faLock, faHandshake } from "@fortawesome/free-solid-svg-icons";
import shopping from '../../Image/json/shoppingicon.json'
import carticon from '../../Image/json/carticon.json'
import granteee from '../../Image/json/granteee.json'
import security from '../../Image/json/security.json'
import Lottie from "lottie-react"

const Service = () => {
  return (
    <section className="wrapper background">
      <Container>
        <Row>
          {serviceData.map((val, index) => {
            let iconComponent;
            switch (val.icon) {
              case "shopping-cart":
                iconComponent = <Lottie animationData={shopping}></Lottie>;
                break;
              case "credit-card":
                iconComponent = <Lottie animationData={carticon}></Lottie>;
                break;
              case "lock":
                iconComponent = <Lottie animationData={security}></Lottie>;
                break;
              case "handshake":
                iconComponent = <Lottie animationData={granteee}></Lottie>;
                break;
              default:
                iconComponent = null;
            }
            return (
              <Col
                md={3}
                sm={5}
                xs={9}
                style={{ backgroundColor: val.bg }}
                className="feature"
                key={index}
              >
                <div className="icone">{iconComponent}</div>
                <h3>{val.title}</h3>
                <p>{val.subtitle}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Service;
