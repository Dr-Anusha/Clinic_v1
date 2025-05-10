import React from 'react';
import './Team.css';

function Team() {
  return (
    <div className="team-container">
      <div className="team-label">Therapist Team</div>
      <div className="team-header">
        <h2>Our Dedicated & Experienced <br /> Therapist Team</h2>
        <button className="view-all-button">View All Team →</button>
      </div>
      <div className="team-members">
        <div className="team-member">
          <img src="/doctor.png" alt="Dr. Emily Brown" />
          <h3>Dr. Emily Brown</h3>
          <p>Senior Physiotherapist</p>
        </div>
        <div className="team-member">
          <img src="/doctor.png" alt="Dr. Lisa Johnson" />
          <h3>Dr. Lisa Johnson</h3>
          <p>Pediatric Therapist</p>
        </div>
        <div className="team-member">
          <img src="/doctor.png" alt="Dr. Jessica Wilson" />
          <h3>Dr. Jessica Wilson</h3>
          <p>Neurological Therapist</p>
        </div>
        <div className="team-member">
          <img src="/doctor.png" alt="Dr. Linda Thomas" />
          <h3>Dr. Linda Thomas</h3>
          <p>Orthopedic Therapist</p>
        </div>
      </div>
    </div>
  );
}

export default Team;