import React from 'react';
import './Attention.css';

function Attention() {
  return (
    <div className="attention-container">
      <div className="attention-header">
        <div className="attention-label">Need Attention</div>
        <h2>Where Do You Need Attention?</h2>
        <p>We understand that injuries and acute pain can happen unexpectedly. Our emergency physiotherapy services are designed to provide prompt and effective care to help you manage.</p>
      </div>
      <div className="attention-points">
        <div className="attention-point">
          {/* Placeholder for icon */}
          <span className="attention-icon">🤕</span>
          Neck Pain
        </div>
        <div className="attention-point">
          {/* Placeholder for icon */}
          <span className="attention-icon">💪</span>
          Shoulder Pain
        </div>
        <div className="attention-point">
          {/* Placeholder for icon */}
          <span className="attention-icon">🦴</span>
          Hip Pain
        </div>
        <div className="attention-point">
          {/* Placeholder for icon */}
          <span className="attention-icon">🦵</span>
          Knee Pain
        </div>
        <div className="attention-point">
          {/* Placeholder for icon */}
          <span className="attention-icon"> arm</span>
          Elbow Pain
        </div>
        <div className="attention-point">
          {/* Placeholder for icon */}
          <span className="attention-icon">💪</span>
          Tricep Pain
        </div>
        <div className="attention-point">
          {/* Placeholder for icon */}
          <span className="attention-icon">🖐️</span>
          Hand Pain
        </div>
        <div className="attention-point">
          {/* Placeholder for icon */}
          <span className="attention-icon">🦶</span>
          Foot Pain
        </div>
      </div>
    </div>
  );
}

export default Attention;
