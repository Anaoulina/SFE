import React from 'react';
import TablBanner from '../../Image/tableaubanner.jpeg';
import paiperBanner from '../../Image/paiperpaint.jpeg';
import advBanner from '../../Image/adverta.jpeg';
import hosing from '../../Image/housing.jpg';
import clothing from '../../Image/clothing.jpeg';
import acc from '../../Image/access.png';
import cart from '../../Image/cart.jpg';
import agenda from '../../Image/calendrie.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import "./prodcatestyle.css";

function Productcate() {
    const navigate = useNavigate();
    return (
        <> <center>
            <div className="banner">
                <div className="sec">
                    <h2 className="titre"> Our Products</h2>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="banner_item align-items-center bg-image" style={{ backgroundImage: `url(${TablBanner})` }} data-aos="fade-right">
                                <div className="banner_category">
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/Shop/Painting`} >Painting</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="banner_item align-items-center bg-image" style={{ backgroundImage: `url(${paiperBanner})` }} data-aos="fade-up" >
                                <div className="banner_category">
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/Shop/paper`} >PaperPaint</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="banner_item align-items-center bg-image" style={{ backgroundImage: `url(${advBanner})` }} data-aos="fade-left">
                                <div className="banner_category">
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/Shop/Adss`} >Advertise</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="banner_item align-items-center bg-image" style={{ backgroundImage: `url(${hosing})` }} data-aos="fade-right">
                                <div className="banner_category">
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/Shop/house`} >Bed linen</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="banner_item align-items-center bg-image" style={{ backgroundImage: `url(${clothing})` }} data-aos="fade-right">
                                <div className="banner_category">
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/Shop/clothes`} >Clothing</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="banner_item align-items-center bg-image" style={{ backgroundImage: `url(${acc})` }} data-aos="fade-right">
                                <div className="banner_category">
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/Shop/Access`} >Accesoires</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="banner_item align-items-center bg-image" style={{ backgroundImage: `url(${agenda})` }} data-aos="fade-right">
                                <div className="banner_category">
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/Shop/Agendacalendrie`} >Agenda calendrie</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="banner_item align-items-center bg-image" style={{ backgroundImage: `url(${cart})` }} data-aos="fade-right">
                                <div className="banner_category">
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/Shop/Cart`} >Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></center>
        </>
    )
}

export default Productcate;
