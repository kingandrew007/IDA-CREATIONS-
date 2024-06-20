import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/About.css';

function About() {
  useEffect(() => {
    const handleScroll = () => {
      const content = document.querySelectorAll('.content-text');
      content.forEach((text) => {
        const position = text.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (position < screenPosition) {
          text.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id='about'>
      <main className="about-main">
        <div className="image-container">
          <img src="https://idacreations.com/img/6650956%20copy.png" alt="boy" className="about-image" />
        </div>
        <div className="content-container">
          <h3 className="header-text">IDA - AR, VR and MR Company in India</h3>
          <p className="content-text">
            "We IDA - Industrial Design and Animation is a creative and Innovative Digital Retransformation organisation with Focus the stream on both Web 3.0 and Industry 4.0 solutions. We Transform and elevate your Insustry and Business With Immersive Technical solution with extensiveand wide range of Imagination that becomes Possible."
          </p>
          <p className="content-text">
            "We @IDA Transform your needs and reinvent the Your business for upcoming digital future. We create and design based on your needs with technologies like AR ( Augmented Reality ), VR( Virtual Reality ), MR( Mixed Reality ) and XR( eXtended Reality ). To reshape the entire future."
          </p>
          <p className="content-text">Join Us into the Immersive Future</p>
          <Link to={'#'} id="learn-more" className="learn-more">Learn more</Link>
        </div>
      </main>
    </div>
  )
}

export default About;
