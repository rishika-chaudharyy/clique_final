import React, { useState } from "react";
import "../styles/Navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import logo from "../assets/logo.png"; // Replace with your CLIQUE logo

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-left" onClick={closeMenu}>
          <img src={logo} alt="CLIQUE Logo" className="logo" />
        </a>

        {/* Navigation */}
        <nav className={`navbar-links ${menuOpen ? "show" : ""}`}>
          <a href="#home" className="nav-link" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" className="nav-link" onClick={closeMenu}>
            About
          </a>

          <a href="#domains" className="nav-link" onClick={closeMenu}>
            Domains
          </a>

          <a href="#events" className="nav-link" onClick={closeMenu}>
            Events
          </a>

          <a href="#team" className="nav-link" onClick={closeMenu}>
            Team
          </a>

          <a href="#gallery" className="nav-link" onClick={closeMenu}>
            Gallery
          </a>

          <a href="#contact" className="nav-link" onClick={closeMenu}>
            Contact
          </a>

          <a href="#join" className="nav-link login-link" onClick={closeMenu}>
            <span className="login-btn">Join CLIQUE</span>
          </a>
        </nav>

        {/* Mobile Menu */}
        <div className="menu-icon mobile-only" onClick={toggleMenu}>
          {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
