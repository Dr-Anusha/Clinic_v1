import React from 'react';
    import { Link } from 'react-router-dom';
    import './Header.css';

    function Header() {
      return (
        <header>
          <div className="top-bar">
            <div className="top-bar-left">
              <span>+(123) 698-5245</span>
              <span>info@domain.com</span>
              <span>24/11 Robert Road, New York, USA</span>
            </div>
            <div className="top-bar-right">
              <a href="https://facebook.com">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="main-header">
            <div className="logo">
              <img src="/lg.png" alt="Physiocare Logo" />
              <h1>
                Physio<span className="logo-care">care</span>
              </h1>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/pages">Pages</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </nav>
            <div className="phone-button">
              <span>+(123) 698-5245</span>
              <i className="fas fa-phone"></i>
            </div>
          </div>
        </header>
      );
    }

    export default Header;
