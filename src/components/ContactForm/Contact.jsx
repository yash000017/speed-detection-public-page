import React from "react";
import "./Contact.css"; // Import the CSS file
import appStore from "../../assets/appstore.png";
import playStore from "../../assets/playstore.png";

const Contact = () => {
  return (
    <footer id="contact" className="footer">
      <div className="section">
        <h3 className="title">Download Our App</h3>
        <div className="download-img-container">
          <img className="download-img" src={appStore} />
          <img className="download-img" src={playStore} />
        </div>
      </div>

      <div className="section">
        <h3 className="title">Contact Us</h3>
        <a href="tel:+917990242189" className="link">
          Call us +91 79902 42189
        </a>
        <a href="mailto:mail@domain.com" className="link">
          info@qrioustech.com
        </a>
      </div>

      <div className="section">
        <h3 className="title">Qrious Tech</h3>
        <div className="address">
          <p>
            Office No. 907/908/909, Block-A, Dev Aurum, Anandnagar Cross Road,
            Prahlad nagar, Ahmedabad, Gujarat 380015
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
