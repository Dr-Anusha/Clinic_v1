import React from 'react';
import './WhyUs.css';
import { FaUserFriends, FaSeedling, FaCogs, FaLightbulb, FaMapMarkerAlt, FaHandsHelping } from 'react-icons/fa';

function WhyUs() {
  return (
    <section className="why-us-section">
      {/* Heading Section */}
      <div className="why-us-header">
        <button className="why-us-tag">Why Us</button>
        <h2>
          <span className="highlight">Excellence In</span> Care And Rehabilitation
        </h2>
      </div>

      <div className="why-us-wrapper">
        {/* Left Box */}
        <div className="why-us-box light">
          <div className="why-us-item">
            <div className="icon"><FaUserFriends /></div>
            <div>
              <h3>Experienced Team</h3>
              <p>Our skilled professionals provide compassionate care tailored to your needs.</p>
            </div>
          </div>
          <div className="why-us-item">
            <div className="icon"><FaSeedling /></div>
            <div>
              <h3>Patient-Centered Approach</h3>
              <p>We prioritize your comfort and recovery with personalized treatment plans.</p>
            </div>
          </div>
          <div className="why-us-item">
            <div className="icon"><FaCogs /></div>
            <div>
              <h3>Expertise And Experience</h3>
              <p>Years of experience ensure top-quality care for all patients.</p>
            </div>
          </div>
        </div>

        {/* Doctor Image Container */}
        {/* <div className="doctor-image-container">
          <div className="doctor-image">
            <img src="/doctor.png" alt="Doctor" />
          </div>
        </div> */}

        {/* Right Box */}
        <div className="why-us-box dark">
          <div className="why-us-item">
            <div>
              <h3>Advanced Technology</h3>
              <p>We use cutting-edge tools to enhance your rehabilitation process.</p>
            </div>
            <div className="icon"><FaLightbulb /></div>
          </div>
          <div className="why-us-item">
            <div>
              <h3>Convenient And Accessible</h3>
              <p>Our services are designed to be easily accessible for everyone.</p>
            </div>
            <div className="icon"><FaMapMarkerAlt /></div>
          </div>
          <div className="why-us-item">
            <div>
              <h3>Community Involvement</h3>
              <p>We engage with the community to promote health and wellness.</p>
            </div>
            <div className="icon"><FaHandsHelping /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;