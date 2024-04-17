import React from "react";
import "./ServiceStyle.css";
import { Col, Container, Row } from "react-bootstrap";
import { serviceData } from "./SliderData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faCreditCard, faLock, faHandshake } from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  return (
    <section className="wrapper background">
      <Container>
        <Row>
          {serviceData.map((val, index) => {
            let iconComponent;
            switch (val.icon) {
              case "shopping-cart":
                iconComponent = <FontAwesomeIcon icon={faShoppingCart} />;
                break;
              case "credit-card":
                iconComponent = <FontAwesomeIcon icon={faCreditCard} />;
                break;
              case "lock":
                iconComponent = <FontAwesomeIcon icon={faLock} />;
                break;
              case "handshake":
                iconComponent = <FontAwesomeIcon icon={faHandshake} />;
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
                <div className="icon">{iconComponent}</div>
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
