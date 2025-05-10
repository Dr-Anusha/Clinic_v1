import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src="/img2.jpg" alt="Physiotherapy Session" />
        <div className="experience-box">
          <span className="years">15+</span>
          Years Of Experience
        </div>
      </div>
      <div className="about-content">
        <div className="about-us-label">About Us</div>
        <h2>We Are The Best For <br /> Physiotherapy</h2>
        <p>We understand that injuries and acute pain can happen unexpectedly. Our emergency physiotherapy services are designed to provide prompt and effective care to help you manage pain, prevent further injury, and start your recovery process as quickly as possible.</p>
        <div className="about-features">
          <div className="feature">
            {/* Placeholder for icon */}
            ⚕️ Nutrition Strategies
          </div>
          <div className="feature">
            {/* Placeholder for icon */}
            💪 Be Pro Active
          </div>
          <div className="feature">
            {/* Placeholder for icon */}
            🏋️ Workout Routines
          </div>
          <div className="feature">
            {/* Placeholder for icon */}
            😊 Support &amp; Motivation
          </div>
        </div>
        <div className="doctor-info">
          <img src="/doctor.png" alt="Dr. Jamie Smith" className="doctor-image-about" />
          <div>
            <div className="doctor-name">Dr. Jamie Smith</div>
            <div className="doctor-title">Physiotherapy</div>
          </div>
          <button className="appointment-button">Make An Appointment →</button>
        </div>
      </div>
    </div>
  );
}

export default About;
