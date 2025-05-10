import React from 'react';
import './Quality.css';

function Quality() {
  return (
    <div className="quality-container">
      <div className="quality-images">
        <img src="/t1.jpg" alt="Physiotherapy Session 1" className="quality-image" />
        <img src="/t3.jpg" alt="Physiotherapy Session 2" className="quality-image" />
      </div>
      <div className="quality-content">
        <div className="solution-text">Solution To Your Plan</div>
        <h2>We Proudly Give <br /> Quality Treatment</h2>
        <p>We understand that injuries and acute pain can happen unexpectedly. Our emergency physiotherapy services are designed to provide prompt and effective care to help you manage.</p>
        <ul>
          <li> We understand that injuries.</li>
          <li> can happen unexpectedly Our emergency.</li>
          <li> We understand that injuries.</li>
        </ul>
        <div className="quality-stats">
          <div className="stat-item">
            <span className="stat-number">78+</span>
            <span className="stat-label">Skilled Therapist</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">98%</span>
            <span className="stat-label">Success Rate</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">950+</span>
            <span className="stat-label">Patients Treated</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quality;
