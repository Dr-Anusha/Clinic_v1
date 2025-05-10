import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Appointment from './components/Appointment';
import Header from './components/Header';
import Quality from './components/Quality';
import WhyUs from './components/WhyUs'; // Import WhyUs component
import Attention from './components/Attention';
import Team from './components/Team';
import Story from './components/Story';
import Location from './components/Location';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
				<Services />
				<About />
        <div className="quality-whyus-container">
          <Quality /> {/* Add Quality component */}
          <WhyUs /> {/* Add WhyUs component */}
        </div>
        <Attention />
        <Team />
        <Story />
        <Location />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
