import React from 'react';
import './Location.css';

const Location = () => {
  return (
    <section className="location-container" id="contact">
      <div className="location-content">
        <div className="location-header">
          <div className="location-label">Solution To Your Plan</div>
          <h2 className="location-title">
            We are here to provide the best physiotherapy care for you.
          </h2>
        </div>

        <div className="location-grid">
          {/* Google Map */}
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6487689189394!2d80.26798747507794!3d13.058014587265383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52670013b6305f%3A0xaa475ea817f655db!2sDEXTERITY%20PHYSIO%20CARE!5e0!3m2!1sen!2sin!4v1743008565135!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Maps Location"
              className="location-map-iframe"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="location-info">
            <div className="location-info-content">
              <h3>📍 Our Address</h3>
              <p className='location-address'>
                No.36, Jani Jhan Khan Road, <br />
                S.K's Integrated Medical Wellness Center, <br />
                First Floor, Royapettah, Chennai - 600014
              </p>
            </div>

            <div className="location-info-content">
              <h3>🕒 Hours</h3>
              <p><span>Monday - Friday:</span> 5 PM - 9 PM</p>
              <p className="location-closed">Sunday: Closed</p>
            </div>

            <div className="location-info-content">
              <h3>📞 Contact</h3>
              <p>Email: <a href="mailto:dexterityphysiotherapy@gmail.com">dexterityphysiotherapy@gmail.com</a></p>
              <p>Phone: <a href="tel:9080500387">+91 90805 00387</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
