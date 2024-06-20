import React from 'react';
// import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './styles/Home.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import About from './About';
import OurServices from './OurServices';
import OurWork from './OurWork';
import Projects from './Projects';
import Clients from './Clients';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-container">
       <div className="header-content">
          <strong className="header-title">Bringing Ideas To Our Reality</strong>
        </div>
      <header className="home-header">
        <Slider {...settings} className="slider-container">
          <div className="image-container">
            <img 
              src="https://idacreations.com/img/1_xKfrcrFty_-xaXcfUjOSKg.webp" 
              alt="vr pic" 
              className="header-image main-image"
            />
          </div>
          <div className="image-container">
            <img 
              src="https://idacreations.com/img/Vid.png" 
              alt="side image" 
              className="header-image side-image"
            />
          </div>
          
        </Slider>
       
      </header>
 
    </div>
  );
}

export default Home;
