import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import SliderCard from '../../component/SliderCard/SliderCard';
import Service from '../../component/SliderCard/Service';
import { SliderData } from '../../component/SliderCard/SliderData';

import { Container } from 'react-bootstrap';
import Productcate from '../../component/SliderCard/Productcate';
import Bestsiller from '../../component/SliderCard/Bestsiller';
import Footer from '../../component/Footer/footer';




const settings = {
  nav:false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
}
function Home() {
    return (
      <>
      <section className='homeSlide' style={{ backgroundColor: '#F4F0F0' }}>
          <Container style={{ marginBottom: '100px' }}>
              <Slider {...settings}>
                  {SliderData.map((value, index) => {
                      return (
                          <SliderCard key={index} title={value.title} cover={value.cover} desc={value.desc} />
                      )
                  })}
              </Slider>
          </Container>
      </section>
      <section style={{marginBottom: '500px'}}>
          <Service style={{ marginTop: '100px' }} />
          <Productcate  style={{ marginTop: '100px' }}/>
      <Bestsiller style={{ marginBottom: '100px' }}/>
      </section>
      
     
      <Footer style={{ marginBottom: '100px' }} />
      
      
      
  </>
  )
}

export default Home
