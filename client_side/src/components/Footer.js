import React, { useEffect } from 'react';
import './styles/Footer.css';

function Footer() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.footer-section');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="footer">
      <div className="footer-section">
        <h2 style={{ color: "wheat" }}>Contact Us</h2>
        <p style={{ color: "wheat" }}>
          INDUSTRIAL DESIGN & ANIMATIONS<br />
          Karunaa Conclave,<br />
          No.1963, J Block, 3rd Street, 5th Main Road,<br />
          Anna Nagar West, Anna Nagar, Chennai,<br />
          Tamil Nadu - 600040, INDIA
        </p>
        <p style={{ color: "wheat", fontWeight: "600" }}>Email: info@idacreations.com</p>
      </div>
      <div className="footer-section">
        <h3 style={{ color: "wheat" }}>Locate us on Map</h3>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2649641848243!2d80.20659207454825!3d13.082386712440726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52641f9cd43ccb%3A0xbc3c8cddac8e49b9!2sSyncfusion%20Software%20Private%20Limited!5e0!3m2!1sen!2sin!4v1718876999133!5m2!1sen!2sin" 
          width="300" 
          height="200" 
          style={{ border: "0" }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="footer-section">
        <h3 style={{ color: "wheat" }}>Follow Us</h3>
        <div className="social-icons">
          <div className="icon">
            <img src="https://idacreations.com/img/instagram.png" alt="Instagram" />
            <p>Insta Profile</p>
          </div>
          <div className="icon">
            <img src="https://idacreations.com/img/email.png" alt="Email" />
            <p>Send Enquiry</p>
          </div>
          <div className="icon">
            <img src="https://idacreations.com/img/whatsapp.png" alt="Whatsapp" />
            <p>Whatsapp</p>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <button className="join-button">Join now</button>
      </div>
    </div>
  );
}

export default Footer;
