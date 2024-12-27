import React from 'react';
import './FeatureSection.css';

const FeatureSection = () => {
  return (
    <div id="features" className="feature">
      <div className="feature-card">
        <div className="feature-icon">⚡</div>
        <h2>Real-Time Detection</h2>
        <p>Instantly detect and track speed balls using our real-time technology.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">🤖</div>
        <h2>AI-Powered</h2>
        <p>Leverage AI to improve the accuracy of speed ball recognition and analysis.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">🎯</div>
        <h2>High Accuracy</h2>
        <p>Our system offers high-precision analysis with minimal errors.</p>
      </div>
    </div>
  );
};

export default FeatureSection;
