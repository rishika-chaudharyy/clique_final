import React from "react";
import "../styles/Footer.css";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* About */}
        <div className="footer-about">
          <img src="/logo2.png" alt="Clique Logo" className="footer-logo" />

          <p>
            <strong>Clique – The IT & Analytics Club</strong> is a vibrant
            community of innovators, developers, analysts, and technology
            enthusiasts committed to learning, collaboration, and creating
            impactful solutions through technology.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-links">
          <h3>Explore</h3>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Events</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Activities */}
        <div className="footer-links">
          <h3>Activities</h3>

          <ul>
            <li>Workshops</li>
            <li>Hackathons</li>
            <li>Tech Talks</li>
            <li>Competitions</li>
            <li>Projects</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Connect With Us</h3>

          <div className="social-icons">
            <FaLinkedin />
            <FaInstagram />
            <FaGithub />
          </div>

          <p>
            <FaMapMarkerAlt /> Nirma University,
            <br />
            Ahmedabad, Gujarat, India
          </p>

          <p>
            <FaEnvelope /> clique@nirmauni.ac.in
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
