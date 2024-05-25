import './about.css';
import img1 from '../../Image/access.png';
import img2 from '../../Image/access.png';
import img3 from '../../Image/access.png';
import about1 from '../../Image/json/about1.json'
import about2 from '../../Image/json/about2.json'


import Lottie from "lottie-react"
import React, { useState, useEffect } from 'react';

function About() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <div className="App">
            <div id="pageTitle">
                <p>About Us</p>
            </div>
            <div className={`columns ${visible ? 'fadeIn' : 'fadeOut'}`}>
                <div id="team">
                   
                    <Lottie animationData={about1}></Lottie>
                   
                    
                </div>
                
            </div>
            <div className={`columns ${visible ? 'fadeIn' : 'fadeOut'}`} id="middleColumn">
                <div id="pageTitle1">
                    <p>About Us</p>
                </div>
                <div id="pageData">
                    <p>Our store is a one-stop shop for all your printing and advertising needs. We pride ourselves on providing high-quality products that are not only visually appealing but also durable and effective in promoting your brand or message. From vibrant posters that catch the eye to sleek business cards that make a lasting impression, we ensure that every item is crafted with attention to detail and a commitment to excellence.</p>
                    <p>We understand the importance of customization in making your promotional materials stand out. That's why we offer a user-friendly online platform where you can easily design your products to your exact specifications. Choose from a variety of templates, colors, fonts, and sizes to create something unique that truly represents your brand. Our design tools are intuitive and accessible, allowing even those with no design experience to create professional-looking items.</p>
                    <p>At our store, we believe that great marketing starts with great materials. Let us help you create the perfect advertising products to showcase your business and leave a lasting impression on your audience. With our extensive range of customizable options and dedication to quality, you can be confident that your print materials will make a powerful impact.</p>
                </div>
            </div>
            <div className={`columns ${visible ? 'fadeIn' : 'fadeOut'}`} id="rightColumn">
                <div id="team">
                    <Lottie animationData={about2}></Lottie>
                       
                </div>
            </div>
        </div>
    );
}

export default About;
