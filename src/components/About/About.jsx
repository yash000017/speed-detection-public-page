import React from 'react';
import './AboutSection.css';
import man from '../../assets/about.jpg'

const AboutSection = () => {
  return (
    <section id='about' className={"about"}>
      <img src={man} alt="About Us" />
      <div className={"aboutText"}>
        <h2>About Our Product</h2>
        <p>
          We provide cutting-edge speed ball detection technology that revolutionizes sports analysis.
        </p>
        <p>
        By integrating seamlessly with existing training setups, our product offers a user-friendly
        experience.
        </p>
        <p>
        The technology leverages machine learning and high-speed image processing to deliver real-time data.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;

{/* <p>
We provide cutting-edge speed ball detection technology that revolutionizes sports analysis.
Our system is designed for coaches, athletes, and sports enthusiasts who aim to gain a
competitive edge through precise, data-driven insights.
</p>
<p>
Our advanced algorithms measure ball speed with unparalleled accuracy, enabling users to
track and improve performance over time. The technology leverages machine learning and
high-speed image processing to deliver real-time data, empowering players to refine their
techniques with every session.
</p>
<p>
By integrating seamlessly with existing training setups, our product offers a user-friendly
experience that blends seamlessly into training environments, from small practice areas to
full-scale sports facilities. Our goal is to support athletes in reaching their highest potential.
</p>
<p>
Whether you’re aiming for a competitive advantage, personal improvement, or enhanced coaching
insights, our speed ball detection technology is the ideal tool to bring your performance to
the next level.
</p> */}