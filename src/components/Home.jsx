import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className='home2'>
        <div className="home-content">
          <div className="welcome-text">Welcome To Physiocare</div>
          <h1>Destination For <br /> Relief &amp; Wellness</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at layout the point of using lorem the Ipsum less normal
            distribution of letters.</p>
          <div className="buttons">
            <button className="explore-button">Explore Services →</button>
            <button className="book-button">Book Appointment →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
