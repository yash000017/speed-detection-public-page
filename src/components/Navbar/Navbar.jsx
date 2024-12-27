import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from "../../assets/logo.png"

const Navbar = () => {
  // State to track if the navbar should have a solid background
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    // Trigger navbar background change when the page is scrolled by a small amount
    if (window.scrollY > 50) { // Change "50" to your desired scroll threshold
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Use useEffect to add and clean up the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className='brand'>
        <img src={logo} className='logo'/>
        <h1>Ball Speed Detection</h1>
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#plans">Plans</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
