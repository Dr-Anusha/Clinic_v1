import React from 'react';
import './Services.css';
import { FaUserMd, FaAmbulance, FaComments } from 'react-icons/fa';

function Services() {
  return (
    <div className="services-container">
      <div className="service-card">
        <div className="service-content">
          <div className="service-icon">
            <FaUserMd />
          </div>
          <div>
            <h3>Expert Therapists</h3>
            <p>Our team of licensed and certified physiotherapists</p>
          </div>
        </div>
      </div>

      <div className="divider" />

      <div className="service-card">
        <div className="service-content">
          <div className="service-icon">
            <FaAmbulance />
          </div>
          <div>
            <h3>Emergency Service</h3>
            <p>Our emergency physiotherapy services are designed to address</p>
          </div>
        </div>
      </div>

      <div className="divider" />

      <div className="service-card">
        <div className="service-content">
          <div className="service-icon">
            <FaComments />
          </div>
          <div>
            <h3>Free Consultant</h3>
            <p>Our mission is to enhance the quality of life of our patients</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
