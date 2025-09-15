import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import './styles/NavBar.css';
import {HashLink as Link} from 'react-router-hash-link'
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
      <Link to='/'><img src="https://www.idacreations.com/static/media/IDA.54a2c355e8d86a6b6be8.png" alt="Logo" className="navbar-logo" /></Link>  
      </div>
      <button className="navbar-toggle" onClick={toggleNavbar}>
        <span className="navbar-toggle-icon">&#9776;</span>
      </button>
      <ul className={`navbar-nav ${isOpen ? 'navbar-open' : ''}`}>
        <li className="nav-item"><Link to="/" smooth>Home</Link></li>
        <li className="nav-item"><Link to="#about" smooth>About</Link></li>
        <li className="nav-item"><Link to="#services" smooth>Services</Link></li>
        <li className="nav-item"><Link to="#projects" smooth>Projects</Link></li>
        <li className="nav-item"><Link to="#clients" smooth>Clients</Link></li>
        <li className="nav-item"><Link to="/contact" smooth>Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
