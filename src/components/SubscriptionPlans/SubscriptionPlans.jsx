// SubscriptionPlans.js
import React from 'react';
import './SubscriptionPlans.css'; // Importing the updated minimalist CSS

const SubscriptionPlans = () => {
  return (
    <div id='plans' className="subscription-container">
      <h2 className="section-title">Our Plans</h2>
      <div className="plan-cards-container">
        
        <div className="plan-card basic-plan">
          <div className="plan-header">
            <h3>Basic Plan</h3>
            <p className="price">$9.99/month</p>
          </div>
          <div className="plan-body">
            <p>Speed: 50 km/h</p>
            <p>Ball Count: 100</p>
          </div>
        </div>

        <div className="plan-card pro-plan">
          <div className="plan-header">
            <h3>Pro Plan</h3>
            <p className="price">$19.99/month</p>
          </div>
          <div className="plan-body">
            <p>Speed: 100 km/h</p>
            <p>Ball Count: 250</p>
          </div>
        </div>

        <div className="plan-card premium-plan">
          <div className="plan-header">
            <h3>Premium Plan</h3>
            <p className="price">$29.99/month</p>
          </div>
          <div className="plan-body">
            <p>Speed: 150 km/h</p>
            <p>Ball Count: 500</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SubscriptionPlans;
