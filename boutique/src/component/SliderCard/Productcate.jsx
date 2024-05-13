import React from 'react';
import TablBanner from '../../Image/tableaubanner.jpeg';
import paiperBanner from '../../Image/paiperpaint.jpeg';
import advBanner from '../../Image/adverta.jpeg';
import hosing from '../../Image/housing.jpg';
import clothing from '../../Image/clothing.jpeg';
import acc from '../../Image/access.png';
import "./prodcatestyle.css";

function Productcate() {
    return (
        <>
            <div className="banner">
            <div className="sec"> 
                    <h2 className="titre"> Our Products</h2>
                    <hr />
                    </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="banner_item align-items-center bg-image" style={{ backgroundImage: `url(${TablBanner})` }} data-aos="fade-right">
                                <div className="banner_category">
                                    <a href="#">Painting</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="banner_item align-items-center bg-image" style={{ backgroundImage: `url(${paiperBanner})` }} data-aos="fade-up" >
                                <div className="banner_category">
                                    <a href="#">PaperPaint</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="banner_item align-items-center bg-image" style={{ backgroundImage: `url(${advBanner})` }} data-aos="fade-left">
                                <div className="banner_category">
                                    <a href="#">Advertise</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="banner_item align-items-center bg-image" style={{ backgroundImage: `url(${hosing})` }} data-aos="fade-right">
                                <div className="banner_category">
                                    <a href="#">Bed linen</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="banner_item align-items-center bg-image" style={{ backgroundImage: `url(${clothing})` }} data-aos="fade-right">
                                <div className="banner_category">
                                    <a href="#">Clothing</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="banner_item align-items-center bg-image" style={{ backgroundImage: `url(${acc})` }} data-aos="fade-right">
                                <div className="banner_category">
                                    <a href="#">Accesoires</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Productcate;
