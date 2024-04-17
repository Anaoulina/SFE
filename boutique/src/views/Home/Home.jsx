import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import SliderCard from '../../component/SliderCard/SliderCard';
import Service from '../../component/SliderCard/Service';
import { SliderData } from '../../component/SliderCard/SliderData';

import { Container } from 'react-bootstrap';




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
      <section>
          <Service style={{ marginTop: '100px' }} />
      </section>
  </>
  )
}

export default Home
