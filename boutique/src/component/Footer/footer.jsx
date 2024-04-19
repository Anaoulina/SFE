import React from 'react';
import './footerStyle.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaHome, FaEnvelope, FaPhone, FaPrint } from 'react-icons/fa';
import { IoStorefrontOutline } from "react-icons/io5";

function Footer() {
    return (
        <>
            <footer bgcolor="light" className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href='#' className='me-4 text-reset'>
                            <FaFacebookF />
                        </a>
                        <a href='#' className='me-4 text-reset'>
                            <FaGoogle />
                        </a>
                        <a href='#' className='me-4 text-reset'>
                            <FaInstagram />
                        </a>
                        <a href='#' className='me-4 text-reset'>
                            <FaLinkedin />
                        </a>
                    </div>
                </section>

                <section className=''>
                    <Container className='text-center text-md-start mt-5'>
                        <Row className='mt-3'>
                            <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <IoStorefrontOutline className="me-3" />
                                    LinStore
                                </h6>
                                <p>
                                This store specializes in selling advertising products and anything that can be printed. Whether it's posters, flyers, business cards, or promotional items, our store offers a wide range of customizable products to meet the visual communication needs of businesses and individuals. 
                                </p>
                            </Col>

                            <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        React
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Vue
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Node
                                    </a>
                                </p>
                            </Col>

                            <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Home
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Shop
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        About
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Contact
                                    </a>
                                </p>
                            </Col>

                            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <FaHome className="me-2" />
                                    Agadir , Agadir Morocco
                                </p>
                                <p>
                                    <FaEnvelope className="me-3" />
                                    anaou2003.16@gmail.com
                                </p>
                                <p>
                                    <FaPhone className="me-3" /> + 212 691 218 066
                                </p>
                                <p>
                                    <FaPrint className="me-3" /> + 212 691 218 066
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                Copyright © 2024 - All Right Reserved. 
                </div>
            </footer>
        </>
    );
}

export default Footer;
