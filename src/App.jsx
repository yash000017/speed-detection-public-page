import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import Contact from "./components/ContactForm/Contact";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/About/About";
import SubscriptionPlans from "./components/SubscriptionPlans/SubscriptionPlans";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <SubscriptionPlans />
      <Contact />
    </div>
  );
}

export default App;
