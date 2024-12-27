import React from 'react';
import './Contact.css'; // Import the CSS file
import appStore from '../../assets/appstore.png'
import playStore from '../../assets/playstore.png'

const Contact = () => {
  return (
    <footer id='contact' className="footer">
      <div className="section">
        <h3 className="title">Download Our App</h3>
        <div className='download-img-container'>
          <img className='download-img' src={appStore} />
          <img className='download-img' src={playStore} />
        </div>
      </div>

      <div className="section">
        <h3 className="title">Contact Us</h3>
        <a href="tel:+011234567890" className="link">Call +01 1234567890</a>
        <a href="mailto:mail@domain.com" className="link">mail@domain.com</a>
      </div>

      <div className="section">
        <h3 className="title">Locations</h3>
        <p className="text">Find us in major cities across the globe!</p>
      </div>
    </footer>
  );
};

export default Contact;
